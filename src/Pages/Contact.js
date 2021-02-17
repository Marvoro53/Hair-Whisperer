import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Contact() {
    return (
        <div className="form">
    <Form>
      <h1>If you want to make an appointment or 
        simply have any questions, please enter your 
        name and email</h1>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleName" className="mr-sm-2">First Name: </Label>
        <Input type="text" name="name" id="exampleName" placeholder="First name" />
      </FormGroup>
      <hr/>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleName" className="mr-sm-2">Last Name: </Label>
          <Input type="text" name="name" id="example name" placeholder="Last name" />
      </FormGroup>
      <hr/>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Email: </Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <hr/>
      <FormGroup>
        <Label for="exampleQuestion" className="mr-sm-2">Question: </Label>
        <Input type="textarea" name="textarea" id="exampleText" placeholde="Enter your question"/>
      </FormGroup>
      <hr/>
      <FormGroup>
        <Label for="exampleDate" className="-mr-sm-2">Pick date: </Label>
        <Input type="date" name="calendar" id="exampleDate" placeholder="Enter date" />
      </FormGroup>
      <hr/>
      <p>Send me an email at:<a hrfe="rushinglizzie@yahoo.com"> rushinglizzie@yahoo.com</a></p>
      <Button>Submit</Button>
    </Form>
        </div>
    )
}

export default Contact;