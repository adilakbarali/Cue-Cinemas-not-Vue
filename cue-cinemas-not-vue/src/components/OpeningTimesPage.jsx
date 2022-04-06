import { Table } from "react-bootstrap";

const OpeningTimesPage = () => {
  return (
    <>
      <div className="opening-times-header">
        <h2>Opening & Closing Times</h2>
      </div>
      <br />
      <br />
      <Table className="opening-times-table" style={{width: "40rem"}}>
        <thead className="opening-table-head">
          <tr>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody className="opening-table-body">
          <tr>
            <td>Monday</td>
            <td>09:00</td>
            <td>23:00</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>09:00</td>
            <td>23:00</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>09:00</td>
            <td>23:00</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>09:00</td>
            <td>23:00</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>09:00</td>
            <td>01:00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:00</td>
            <td>01:00</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>12:00</td>
            <td>22:00</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default OpeningTimesPage;