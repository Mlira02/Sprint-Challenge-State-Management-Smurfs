import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, createSmurf } from '../actions'

const Smurfs = (props) => {

const submitHandler = e => {
    e.preventDefault()
    props.createSmurf(props.smurf)
}
    console.log(props)
                if (!props.gotSmurfs) return (
                  <div>
                      <h2>Smurf Village</h2>
                      <button onClick={props.getSmurfs}>Wake up the Village!!</button>
                  </div>
                )
              
                else return (
                    <div>
                        <h1>Smurf Village</h1>
                        {props.smurfs.map(thing => (
                            <div>
                                <h2>{thing.name}</h2>
                                <h3>{thing.height}</h3>
                                <h4>{thing.age}</h4>
                            </div>
                        ))}

                        <form onSubmit={submitHandler}>
                            <input 
                            type="text"
                            placeholder="Enter Name" 
                            name="name"
                            value={props.smurfs.name}

                            />
                            <input 
                            type="text"
                            placeholder="Enter Height"
                            name="height"
                            value={props.smurfs.height}
                            />
                            <input 
                            type="text"
                            placeholder="Enter Age"
                           name="age"
                           value={props.smurfs.age}
                           />
                           <button type="submit">Submit Smurf</button>
                        </form>
                    </div>
            )
        }
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        gotSmurfs: state.gotSmurfs
    };
};
export default connect(
    mapStateToProps, {getSmurfs, createSmurf}
)(Smurfs);