import React from "react";

class DisplayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:8080/EmployeeDetails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
        });
      });
  }

  render() {
    let tb_data = this.state.list.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.Name}</td>
          <td>{item.Age}</td>
          <td>{item.Address}</td>
          <td>{item.Department}</td>
          <td>{item.Salary}</td>
          <td>{item.marital_State}</td>
        </tr>
      );
    });
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Marital Status</th>
              </tr>
          </thead>
          <tbody>{tb_data}</tbody>
        </table>
      </div>
    );
  }
}
export { DisplayTable };
