import { useEffect, useState,useRef } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { makeSelectEvents } from "../../redux/selectors.js";
import { loadEvents } from "../../utils/fetchUtils.js";


const mapStateToProps = state => ({events: makeSelectEvents(state)})

export function mapDispatchToProps(dispatch) {
  return {
    onLoadEvents: dispatch,
    onLoadSuccess: dispatch,
    onLoadFail: dispatch
  };
}

export const withConnect = connect(mapStateToProps, mapDispatchToProps);

const useFetchData = ({
  events,
  onLoadFail,
  onLoadEvents,
  onLoadSuccess,
}) => {

  const [params, setParams] = useState({});
  const hasCash = events[params.startDate] !== undefined

  useEffect(() => {
   const stopRequest =  hasCash || params.startDate === undefined
    if( stopRequest){
      console.log('using cached')
     return
    }
  
    console.log('start fetching for',params.startDate)

    onLoadEvents({ type: "LOAD_START", value: { loading: true } });
    loadEvents(params)
       .then((response) => response.json())
      .then((res) => {

        if (!res.error) {
          onLoadSuccess({
            type: "LOAD_END",
            value: {
              startDate: params.startDate,
              data: res.holidays
            }
          });
        }
      })
      .catch((e) => {
        onLoadFail({
          type: "LOAD_FAIL",
          value: e
        });
      }).finally(()=>{
        // setLoading(false)

      })
  }, [params,hasCash]);
  return [params, setParams]
};


export const withDataInner = (Component) => ({
  onLoadEvents,
  onLoadSuccess,
  onLoadFail,
  events,
  
  ...props
}) => {

  const [, setParams] = useFetchData({
    onLoadFail,
    events,
    onLoadEvents,
    onLoadSuccess,
  });

  return <Component {...props} events={events} loadNewEvents={setParams} />;
};

 export const withData = compose(withConnect, withDataInner);
