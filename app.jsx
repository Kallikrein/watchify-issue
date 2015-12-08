var App = React.createClass({
  render:function () {
    return (
      <div className='Hello'>
        Hello World this is looping
      </div>
    );
  }
});

ReactDOM.render(
  <App/>, document.getElementById('react-content')
);