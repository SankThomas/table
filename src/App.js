import React, { useState } from "react"
import { Button } from "@material-ui/core"
import Table from "./Table"

const App = () => {
  const [row, setRow] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [rowID, setRowID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (row && isEditing) {
      // Deal with edit
    } else {
      const newItem = { id: new Date().getTime().toString(), title: row }
      setList([...list, newItem])
      setRow("")
    }
  }

  return (
    <>
      <section>
        <div>
          <form onSubmit={handleSubmit}>
            <Button
              variant="contained"
              color="primary"
              type="Submit"
              style={{ marginBottom: 10 }}
            >
              Add Row
            </Button>

            <div>
              <Table items={list} rows={row} setRows={setRow} />
              <Button color="secondary">Clear Table</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
