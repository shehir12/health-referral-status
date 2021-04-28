const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching in archive
router.post('/finding-and-organising/archive/v1/status-filter', function (req, res) {
  
  const status = req.session.data['status']
  req.session.data['status']=''

  if (status === 'unassigned') {
    res.redirect('/finding-and-organising/archive/v1/unassigned-list')
  } else if (status === 'in-review') {
      res.redirect('/finding-and-organising/archive/v1/review-list')
  } else if (status === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/v1/information-list')
  } else if (status === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/v1/evidence-list')
  } else if (status === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/v1/paperbased-list')
  } else if (status === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/v1/assessment-list')
  } else if (status === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/v1/decision-list')
  } else if (status === 'done') {
    res.redirect('/finding-and-organising/archive/v1/done-list')
  } else if (status === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/v1/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/v1/error')
  }
})

router.post('/finding-and-organising/archive/v2/status-filter', function (req, res) {
  
  const status = req.session.data['status']
  req.session.data['status']=''

  if (status === 'unassigned') {
    res.redirect('/finding-and-organising/archive/v2/unassigned-list')
  } else if (status === 'in-review') {
      res.redirect('/finding-and-organising/archive/v2/review-list')
  } else if (status === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/v2/information-list')
  } else if (status === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/v2/evidence-list')
  } else if (status === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/v2/paperbased-list')
  } else if (status === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/v2/assessment-list')
  } else if (status === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/v2/decision-list')
  } else if (status === 'done') {
    res.redirect('/finding-and-organising/archive/v2/done-list')
  } else if (status === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/v2/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/v2/claimant-detail')
  }
})

// Branching
router.post('/finding-and-organising/v1/status-filter', function (req, res) {
  
    const status = req.session.data['status']
    req.session.data['status']=''
  
    if (status === 'unassigned') {
      res.redirect('/finding-and-organising/v1/unassigned-list')
    } else if (status === 'in-review') {
        res.redirect('/finding-and-organising/v1/review-list')
    } else if (status === 'gathering-information') {
      res.redirect('/finding-and-organising/v1/information-list')
    } else if (status === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v1/evidence-list')
    } else if (status === 'paper-based-review') {
      res.redirect('/finding-and-organising/v1/paperbased-list')
    } else if (status === 'assessment-booked') {
      res.redirect('/finding-and-organising/v1/assessment-list')
    } else if (status === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v1/decision-list')
    } else if (status === 'done') {
      res.redirect('/finding-and-organising/v1/done-list')
    } else if (status === 'withdrawn') {
      res.redirect('/finding-and-organising/v1/withdrawn-list')
    } else {
      res.redirect('/finding-and-organising/v1/error')
    }
  })


module.exports = router
