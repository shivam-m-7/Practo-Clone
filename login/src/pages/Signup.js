import React from 'react';
import './Signup.css'

import {Card, CardHeader, Container, CardBody, FormGroup, Label, Form, Input, Button} from "reactstrap";

const Signup=()=> {
    return (

        <div className="Appss">
              <div className="signupp">
                 <a className="log" href="#">Login</a>
                 <a className="sign" href="#"> Register</a>
               </div>
           <hr className="lines"></hr>
           <div className="contain">
               <div className="picc">
                  <img className="logos" src="https://accounts.practo.com/static/images/illustration.png"></img>
               </div>
          
              <div className="info">
         
                     <Container>
                         <Card>
                             <CardHeader>
                             </CardHeader>
                             <h2 id='joinn'>Join Practo</h2>
                             <hr></hr>
                                 <CardBody>
                                     <Form id='formm'>
                                         <FormGroup>
                                            <Label id='labelss' for="name">Full Name</Label><br></br>
                                            <Input id='name' type="text" placeholder='Full Name'></Input><br></br>
                                            </FormGroup>
                                            <FormGroup>
                                            <Label id='labelss' for="mobile">Mobile Number</Label><br></br>
                                          <select>
                                            <option>+91(IND)</option>
                                            <option>+65(SGP)</option>
                                            <option>+63(PHL)</option>
                                            <option>+60(MYS)</option>
                                            <option>+62(IDN)</option>
                                            <option>+55(BRA)</option>
                                            <option>+52(MEX)</option>
                                            <option>+54(ARG)</option>
                                            <option>+56(CHL)</option>
                                            <option>+84(VNM)</option>
                                            <option>+971(UAE)</option>
                                          </select>
                                          <Input id='mobile' type='number' placeholder='Mobile Number'></Input><br></br>
                                          </FormGroup>
                                          <FormGroup>
                                          <Label  id='labelss' for="passcode">Create Password</Label><br></br>
                                          <Input id='passcode' type='password' placeholder='Create Password'></Input><br></br>
                                          </FormGroup>
                                          <FormGroup>
                                          <Input id='check' type='checkbox'></Input>
                                          <Label id='para'>Receive relevant offers and promotional communication from Practo</Label>
                                         </FormGroup>
                                         <Container>
                                            <Button id='submit'>Register</Button>
                                         </Container>
                                     </Form>
                                  </CardBody>
                               
                          </Card>
                       </Container>
                </div>
           </div>

        </div>
       
    );
}

export default Signup;