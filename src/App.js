import React from "react"
import AddButton from "./AddButton"

const App = () => {
  return (
    <>
      <section>
        <div style={{ marginBottom: 10 }}>
          <AddButton />
        </div>
        <table>
          <tr>
            <th>Task Name</th>
            <th>Linked Status</th>
            <th>Start After (Number of Days)</th>
            <th>Document Mandatory?</th>
            <th>Auto Allocation?</th>
          </tr>
          <tr>
            <td>
              <select>
                <option value="1" selected>
                  One
                </option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1" selected>
                  Four
                </option>
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
              <div class="toggle">
                <input type="checkbox" class="checkbox" id="checkbox" />

                <label for="checkbox" class="label">
                  <div class="ball"></div>
                </label>
              </div>
              {/* End of toggle button  */}
            </td>
            <td>
              {/* Toggle button */}
              <div class="toggle">
                <input type="checkbox" class="checkbox" id="checkbox2" />

                <label for="checkbox2" class="label">
                  <div class="ball"></div>
                </label>
              </div>
              {/* End of toggle button  */}
            </td>
          </tr>
        </table>
      </section>
    </>
  )
}

export default App
