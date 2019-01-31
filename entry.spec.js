const examples = require("./vocab")
const assert = require("assert")

const requiredFields = [
  "name",
  "definition",
  "example",
  "description",
  "relevant-links"
]

const validateEntry = entry => {
  // Make sure that the entry contains at least all the required fields
  requiredFields.forEach(field => {
    assert(entry[field], `Test failed for ${entry.name || "unnamed entry"}\nMissing required field: ${field}`)
  })
  // Check that there are no additional fields (not sure if you want to do that)
  Object.keys(entry).forEach(key => {
    assert(requiredFields.includes(key), `Test failed for ${entry.name || "unnamed entry"}\nAdditional field found: ${key}`)
  })
  console.log(`All tests passing!`)
}

examples.forEach(example => validateEntry(example))
