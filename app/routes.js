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

router.post('/finding-and-organising/archive/usertesting1/status-filter', function (req, res) {
  
  const status = req.session.data['status']
  req.session.data['status']=''

  if (status === 'unassigned') {
    res.redirect('/finding-and-organising/archive/usertesting1/unassigned-list')
  } else if (status === 'in-review') {
      res.redirect('/finding-and-organising/archive/usertesting1/review-list')
  } else if (status === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/usertesting1/information-list')
  } else if (status === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/usertesting1/evidence-list')
  } else if (status === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/usertesting1/paperbased-list')
  } else if (status === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/usertesting1/assessment-list')
  } else if (status === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/usertesting1/decision-list')
  } else if (status === 'done') {
    res.redirect('/finding-and-organising/archive/usertesting1/done-list')
  } else if (status === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/usertesting1/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting1/error')
  }
})

router.post('/finding-and-organising/archive/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/archive/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/archive/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/archive/v3/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/archive/v3/list-4')
  } else if (status2 === 'list-5') {
    res.redirect('/finding-and-organising/archive/v3/list-5')
  } else if (status2 === 'list-6') {
    res.redirect('/finding-and-organising/archive/v3/list-6')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/archive/v3/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/archive/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/v3/decision-list')
  } else if (status2 === 'done') {
    res.redirect('/finding-and-organising/archive/v3/done-list')
  } else if (status2 === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/v3/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/v3/error')
  }
})

router.post('/finding-and-organising/archive/v3/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/v3/new-list')
  } else {
    res.redirect('/finding-and-organising/archive/v3/error-list')
  }
})

router.post('/finding-and-organising/archive/v3/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/archive/v3/claimant-detail')
  }
})

//Archive usertesting2

router.post('/finding-and-organising/archive/usertesting2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/archive/usertesting2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-4')
  } else if (status2 === 'list-5') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-5')
  } else if (status2 === 'list-6') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-6')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/archive/usertesting2/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/archive/usertesting2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/usertesting2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/usertesting2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/usertesting2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/usertesting2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/usertesting2/decision-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/error')
  }
})

router.post('/finding-and-organising/archive/usertesting2/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/usertesting2/new-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/error-list')
  }
})

router.post('/finding-and-organising/archive/usertesting2/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/usertesting2/new-list-review')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/error-list')
  }
})

router.post('/finding-and-organising/archive/usertesting2/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/archive/usertesting2/assign-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/claimant-detail-assigned')
  }
})

router.post('/finding-and-organising/archive/usertesting2/remove-list-review', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/archive/usertesting2/assign-list-review')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/claimant-detail-review')
  }
})

//End of archive

// Branching v1
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
    } else {
      res.redirect('/finding-and-organising/v1/error')
    }
  })

  //Branching v2

  router.post('/finding-and-organising/v2/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/finding-and-organising/v2/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/finding-and-organising/v2/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/finding-and-organising/v2/list-3')
    } else if (status2 === 'list-4') {
      res.redirect('/finding-and-organising/v2/list-4')
    } else if (status2 === 'list-5') {
      res.redirect('/finding-and-organising/v2/list-5')
    } else if (status2 === 'list-6') {
      res.redirect('/finding-and-organising/v2/list-6')
    } else if (status2 === 'unassigned') {
      res.redirect('/finding-and-organising/v2/unassigned-list')
    } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/v2/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/finding-and-organising/v2/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v2/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/finding-and-organising/v2/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/finding-and-organising/v2/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v2/decision-list')
    } else {
      res.redirect('/finding-and-organising/v2/error')
    }
  })

  router.post('/finding-and-organising/v2/assign-list', function (req, res) {
  
    const list = req.session.data['list']
    req.session.data['list']=''
  
    if (list === 'list1') {
      res.redirect('/finding-and-organising/v2/confirmation-list1')
    } else if (list === 'list2') {
      res.redirect('/finding-and-organising/v2/confirmation-list2')
    } else if (list === 'list3') {
      res.redirect('/finding-and-organising/v2/confirmation-list3')
    } else if (list === 'list4') {
      res.redirect('/finding-and-organising/v2/confirmation-list4')
    } else if (list === 'list5') {
      res.redirect('/finding-and-organising/v2/confirmation-list5')
    } else if (list === 'list6') {
      res.redirect('/finding-and-organising/v2/confirmation-list6')
    } else if (list === 'new-list') {
      res.redirect('/finding-and-organising/v2/new-list')
    } else {
      res.redirect('/finding-and-organising/v2/error-list')
    }
  })

  router.post('/finding-and-organising/v2/assign-list-review', function (req, res) {
  
    const list = req.session.data['list']
    req.session.data['list']=''
  
    if (list === 'list1') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list2') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list3') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list4') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list5') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list6') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'new-list') {
      res.redirect('/finding-and-organising/v2/new-list-review')
    } else {
      res.redirect('/finding-and-organising/v2/error-list')
    }
  })

  router.post('/finding-and-organising/v2/remove-list', function (req, res) {
  
    const removeList = req.session.data['remove-list']
    req.session.data['remove-list']=''
  
    if (removeList === 'yes') {
      res.redirect('/finding-and-organising/v2/assign-list')
    } else {
      res.redirect('/finding-and-organising/v2/claimant-detail-assigned')
    }
  })

  router.post('/finding-and-organising/v2/remove-list-review', function (req, res) {
  
    const removeList = req.session.data['remove-list']
    req.session.data['remove-list']=''
  
    if (removeList === 'yes') {
      res.redirect('/finding-and-organising/v2/assign-list-review')
    } else {
      res.redirect('/finding-and-organising/v2/claimant-detail-review')
    }
  })

  //Branching v3

  router.post('/finding-and-organising/v3/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/finding-and-organising/v3/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/finding-and-organising/v3/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/finding-and-organising/v3/list-3')
    } else if (status2 === 'list-4') {
      res.redirect('/finding-and-organising/v3/list-4')
    } else if (status2 === 'list-5') {
      res.redirect('/finding-and-organising/v3/list-5')
    } else if (status2 === 'list-6') {
      res.redirect('/finding-and-organising/v3/list-6')
    } else if (status2 === 'unassigned') {
      res.redirect('/finding-and-organising/v3/unassigned-list')
    } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/v3/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/finding-and-organising/v3/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v3/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/finding-and-organising/v3/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/finding-and-organising/v3/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v3/decision-list')
    } else {
      res.redirect('/finding-and-organising/v3/error')
    }
  })

  router.post('/finding-and-organising/v3/assign-list', function (req, res) {
  
    const list = req.session.data['list']
    req.session.data['list']=''
  
    if (list === 'list1') {
      res.redirect('/finding-and-organising/v3/confirmation-list1')
    } else if (list === 'list2') {
      res.redirect('/finding-and-organising/v3/confirmation-list2')
    } else if (list === 'list3') {
      res.redirect('/finding-and-organising/v3/confirmation-list3')
    } else if (list === 'list4') {
      res.redirect('/finding-and-organising/v3/confirmation-list4')
    } else if (list === 'list5') {
      res.redirect('/finding-and-organising/v3/confirmation-list5')
    } else if (list === 'list6') {
      res.redirect('/finding-and-organising/v3/confirmation-list6')
    } else if (list === 'new-list') {
      res.redirect('/finding-and-organising/v3/new-list')
    } else {
      res.redirect('/finding-and-organising/v3/error-list')
    }
  })

  router.post('/finding-and-organising/v3/remove-list', function (req, res) {
  
    const removeList = req.session.data['remove-list']
    req.session.data['remove-list']=''
  
    if (removeList === 'yes') {
      res.redirect('/finding-and-organising/v3/confirmation-list-removed')
    } else {
      res.redirect('/finding-and-organising/v3/claimant-detail')
    }
  })

  //V4
  router.post('/finding-and-organising/v4/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/finding-and-organising/v4/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/finding-and-organising/v4/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/finding-and-organising/v4/list-3')
    } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/v4/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/finding-and-organising/v4/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v4/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/finding-and-organising/v4/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/finding-and-organising/v4/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v4/decision-list')
    } else {
      res.redirect('/finding-and-organising/v4/error')
    }
  })

router.post('/finding-and-organising/v4/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/v4/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/v4/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/v4/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/v4/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/v4/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/v4/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/v4/new-list')
  } else {
    res.redirect('/finding-and-organising/v4/error-list')
  }
})

router.post('/finding-and-organising/v4/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/v4/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/v4/claimant-detail')
  }
})

//Branching bluesky

//V1
router.post('/finding-and-organising/bluesky/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/bluesky/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/bluesky/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/bluesky/v1/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/bluesky/v1/list-4')
  } else if (status2 === 'list-5') {
    res.redirect('/finding-and-organising/bluesky/v1/list-5')
  } else if (status2 === 'list-6') {
    res.redirect('/finding-and-organising/bluesky/v1/list-6')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/bluesky/v1/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/bluesky/v1/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/bluesky/v1/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/bluesky/v1/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/bluesky/v1/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/bluesky/v1/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/bluesky/v1/decision-list')
  } else if (status2 === 'done') {
    res.redirect('/finding-and-organising/bluesky/v1/done-list')
  } else if (status2 === 'withdrawn') {
    res.redirect('/finding-and-organising/bluesky/v1/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v1/error')
  }
})

router.post('/finding-and-organising/bluesky/v1/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/bluesky/v1/new-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v1/error-list')
  }
})

router.post('/finding-and-organising/bluesky/v1/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/bluesky/v1/claimant-detail')
  }
})

// V2
router.post('/finding-and-organising/bluesky/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/bluesky/v2/unassigned-list')
  } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/bluesky/v2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/bluesky/v2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/bluesky/v2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/bluesky/v2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/bluesky/v2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/bluesky/v2/decision-list')
  } else if (status2 === 'done') {
    res.redirect('/finding-and-organising/bluesky/v2/done-list')
  } else if (status2 === 'withdrawn') {
    res.redirect('/finding-and-organising/bluesky/v2/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v2/error')
  }
})

router.post('/finding-and-organising/bluesky/v2/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/bluesky/v2/new-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v2/error-list')
  }
})

router.post('/finding-and-organising/bluesky/v2/add-to-list', function (req, res) {

  const addToList = req.session.data['add-to-list']
  req.session.data['add-to-list']=''

  if (addToList === 'yes') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list-assigned')
  } else {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list')
  }
})

//V3
router.post('/finding-and-organising/bluesky/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/bluesky/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/bluesky/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/bluesky/v3/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/bluesky/v3/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/bluesky/v3/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/bluesky/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/bluesky/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/bluesky/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/bluesky/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/bluesky/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/bluesky/v3/decision-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v3/error')
  }
})

router.post('/finding-and-organising/bluesky/v3/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list4')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/bluesky/v3/new-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v3/error-list')
  }
})

router.post('/finding-and-organising/bluesky/v3/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/bluesky/v3/claimant-detail')
  }
})

router.post('/finding-and-organising/bluesky/v3/location', function (req, res) {
  const removeList = req.session.data['location']
  req.session.data['location']=''

  if (removeList === 'tresco') {
    res.redirect('/finding-and-organising/bluesky/v3/landing-page')
  } else {
    res.redirect('#')
  }
})

//Branching Claimant Case

//V1
router.post('/claimant-case/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v1/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v1/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v1/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v1/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v1/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v1/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v1/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v1/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v1/decision-list')
  } else {
    res.redirect('/claimant-case/v1/error')
  }
})

//V2
router.post('/claimant-case/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v2/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v2/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v2/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v2/decision-list')
  } else {
    res.redirect('/claimant-case/v2/error')
  }
})

//V3
router.post('/claimant-case/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v3/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v3/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v3/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v3/decision-list')
  } else {
    res.redirect('/claimant-case/v3/error')
  }
})



module.exports = router