import React from "react"
import { Button } from "@material-ui/core"

const Table = ({ items, setRows, rows }) => {
  // This breaks the app, do not use this function
  const deleteRow = (id) => {
    const newRows = rows.filter((row) => row.id !== id)
    setRows(newRows)
  }

  return (
    <>
      <section>
        <table>
          <thead>
            <th>Task Name</th>
            <th>Linked Status</th>
            <th>Start After (Number of Days)</th>
            <th>Document Mandatory?</th>
            <th>Auto Allocation?</th>
          </thead>

          {items.map((item) => {
            const { id, title } = item
            return (
              <tr className="table-row" key={id}>
                <td>
                  <select defaultValue="2">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </td>
                <td>
                  <select defaultValue="2">
                    <option value="1">Four</option>
                    <option value="2">Five</option>
                    <option value="3">Six</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Enter days"
                  />
                </td>
                <td>
                  {/* Toggle button */}
                  <div className="toggle">
                    <input type="checkbox" className="checkbox" id="checkbox" />

                    <label htmlFor="checkbox" className="label">
                      <div className="ball"></div>
                    </label>
                  </div>
                  {/* End of toggle button  */}
                </td>
                <td>
                  {/* Toggle button */}
                  <div className="toggle">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="checkbox2"
                    />

                    <label htmlFor="checkbox2" className="label">
                      <div className="ball"></div>
                    </label>
                  </div>
                  {/* End of toggle button  */}
                </td>
                <td>
                  <Button variant="contained" color="secondary">
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </table>
      </section>
    </>
  )
}

export default Table
