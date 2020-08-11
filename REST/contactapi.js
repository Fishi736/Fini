
var express = require('express');
var router = express.Router();
var RegisterCollection = require('../Model/contact');
var MailCollection = require('../Model/mail');
var TaskCollection = require('../Model/task');


router.post('/adduser', (req, res) => {
    var cc = new RegisterCollection(req.body);
    cc.save();
    res.status(201).send(cc);
});

router.post('/signin', (req, res) => {
    RegisterCollection.find({ $and: [{ "Email": req.body.Email }, { "Password": req.body.Password }] },
        (err, data) => {
            if (err) {
                res.status(500).json({ msg: err });
            }
            else {
                res.status(200).json({ msg: data });
            }
        });
});

router.put('/updatecontact', (req, res) => {
    RegisterCollection.findById(req.body._id, (err, data) => {
        data.Mobile = req.body.Mobile;
        data.Message = req.body.Message;
        data.save();
        res.status(201).send(data);
    });
});

router.delete('/deletecontact/:id', (req, res) => {
    RegisterCollection.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        res.json({ data });
        res.status(200);

    });
});

router.post('/sendMsg', (req, res) => {
    var ms = new MailCollection({
        To: req.body.To,
        Subject: req.body.Subject,
        Text: req.body.Text,
        Date: new Date(),
        status: "s",
    });
    ms.save();
    res.status(201).send(ms);
});

router.get('/sentMail', (req, res) => {
    MailCollection.find({ status: "s" }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.put('/totrash/:id', (req, res) => {
    MailCollection.findById({ _id: req.params.id }, (err, data) => {
        data.status = "d";
        data.save();
        res.status(201).send(data);
    });
});

router.delete('/delete/:id', (req, res) => {
    MailCollection.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.get('/fromtrash', (req, res) => {
    MailCollection.find({ status: "d" }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.post('/addTask', (req, res) => {
    var ta = new TaskCollection(req.body);
    ta.save();
    res.status(201).send(ta);
});

router.get('/getTask', (req, res) => {
    TaskCollection.find({}, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.delete('/deleteTask/:id', (req, res) => {
    TaskCollection.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.get('/readmail/:id', (req, res) => {
    MailCollection.find({ _id: req.params.id }, (err, mail) => {
        res.json({ mail });
        res.status(200);
    });
});
router.get('/inbox/:mail', (req, res) => {
    MailCollection.find({ To: req.params.mail }, (err, mail) => {
        res.json({ mail });
        res.status(200);
    });
});
router.get('/sent/:mail', (req, res) => {
    MailCollection.find({ To: req.params.mail }, (err, mail) => {
        res.json({ mail });
        res.status(200);
    });
});
module.exports = router;