export const withLoader = (Component) => (props) => {
  if (props.loading) {
    return <div>Loading</div>;
  }
  return <Component {...props} />;
};
