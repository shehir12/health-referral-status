const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('finding-and-organising/v1/error', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const status = req.session.data['status']
  
    if (status === 'unassigned') {
      res.redirect('/views/finding-and-organising/v1/unassigned-list')
    }
    if (status === 'in-review') {
        res.redirect('/views/finding-and-organising/v1/unassigned-list')
    } else {
      res.redirect('/views/finding-and-organising/v1/error')
    }
  })


module.exports = router
