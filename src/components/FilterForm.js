import React, { useState } from "react";

import classes from './FilterForm.module.css';

const FilterForm = ({ onSaveData }) => {

    const [enteredOwnerId, setEnteredOwnerId] = useState("");
    const [enteredParts, setEnteredParts] = useState([]);
    const [enteredClasses, setEnteredClasses] = useState([]);
    const [enteredStages, setEnteredStages] = useState(null);
    const [enteredNumMystic, setEnteredNumMystic] = useState([]);
    const [enteredPureness, setEnteredPureness] = useState([]);
    const [enteredBreedCount, setEnteredbreedCount] = useState(null);
    const [enteredHp, setEnteredHp] = useState([0, 1000]);
    const [enteredSkill, setEnteredSkill] = useState([0, 1000]);
    const [enteredSpeed, setEnteredSpeed] = useState([0, 1000]);
    const [enteredMorale, setEnteredMorale] = useState([0, 1000]);

    //input event handlers
    const ownerIdChangeHandler = (e) => {
        setEnteredOwnerId(e.target.value);
    };

    const partsChangeHandler = (e) => {
        const partsInput = e.target.value;
        const partsData = partsInput.replace(/\s/g, '').split(",");

        setEnteredParts(partsData);
    };

    const classesChangeHandler = (e) => {
        const classesInput = e.target.value;
        const classesData = classesInput.replace(/\s/g, '').split(",");

        setEnteredClasses(classesData);
    };

    const stagesChangeHandler = (e) => {
        const stage = parseInt(e.target.value);
        setEnteredStages(stage);
    };

    const numMysticChangeHandler = (e) => {
        const numMysticInput = e.target.value;

        const numMysticBuffer = numMysticInput.replace(/\s/g, '').split(",");
        const numMysticData = numMysticBuffer.map((item) => parseInt(item));

        if (isNaN(numMysticData[0])) {
            setEnteredNumMystic([]);
        } else {
            setEnteredNumMystic(numMysticData);
        }

    };

    const purenessChangeHandler = (e) => {
        const purenessInput = e.target.value;

        const purenessBuffer = purenessInput.replace(/\s/g, '').split(",");
        const purenessData = purenessBuffer.map((item) => parseInt(item));

        if (isNaN(purenessData[0])) {
            setEnteredPureness([]);
        } else {
            setEnteredPureness(purenessData);
        }
    };


    const breedCountChangeHandler = (e) => {

        if (e.target.value) {
            setEnteredbreedCount(parseInt(e.target.value));
        }
        else {
            setEnteredbreedCount(null);
        }
    };

    const hpChangeHandler = (e) => {
        const value = parseInt(e.target.value);

        if (e.target.id === 'min') {
            setEnteredHp([value, enteredHp[1]]);
        }
        else if (e.target.id === 'max') {
            setEnteredHp([enteredHp[0], value]);
        }
    };

    const skillChangeHandler = (e) => {
        const { id, value } = e.target.value;
        if (id === 'min') {
            setEnteredSkill([value, enteredSkill[1]]);
        }
        else if (id === 'max') {
            setEnteredSkill([enteredSkill[0], value]);
        }
    };

    const speedChangeHandler = (e) => {
        const { id, value } = e.target.value;
        if (id === 'min') {
            setEnteredSpeed([value, enteredSpeed[1]]);
        }
        else if (id === 'max') {
            setEnteredSpeed([enteredSpeed[0], value]);
        }
    };

    const moraleChangeHandler = (e) => {
        const { id, value } = e.target.value;
        if (id === 'min') {
            setEnteredMorale([value, enteredMorale[1]]);
        }
        else if (id === 'max') {
            setEnteredMorale([enteredMorale[0], value]);
        }
    };


    const submitHandler = (e) => {
        e.preventDefault();
        const axiesFilterData = {
            owner: enteredOwnerId,
            parts: enteredParts,
            classes: enteredClasses,
            stages: enteredStages,
            numMystic: enteredNumMystic,
            pureness: enteredPureness,
            breedCount: enteredBreedCount,
            hp: enteredHp,
            skill: enteredSkill,
            speed: enteredSpeed,
            morale: enteredMorale
        }

        onSaveData(axiesFilterData);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className={classes.filter__controls}>
                    <div className={classes.filter__control}>
                        <label>Owner Id</label>
                        <input type='text' required onChange={ownerIdChangeHandler} />
                    </div>
                    <div className={classes.filter__control}>
                        <label>Parts</label>
                        <input type='text' placeholder="eg: tail-yam, horn-rose-bud" onChange={partsChangeHandler} />
                        <p>Use "," to enter multiple value</p>
                    </div>
                    <div className={classes.filter__control}>
                        <label>Classes</label>
                        <input type='text' placeholder="eg: Beast, Aquatic" onChange={classesChangeHandler} />
                        <p>Use "," to enter multiple value</p>
                    </div>
                    <div className={classes.filter__control}>
                        <label>Stages</label>
                        <select name='stages' onChange={stagesChangeHandler}>
                            <option >1</option>
                            <option >4</option>
                        </select>
                    </div>
                    <div className={classes.filter__control}>
                        <label>Num Mystic</label>
                        <input type='text' placeholder="eg: 1,5" onChange={numMysticChangeHandler} />
                        <p>Enter values between 0 to 6</p>
                    </div>
                    <div className={classes.filter__control}>
                        <label>Pureness</label>
                        <input type='text' placeholder="eg: 1,5" onChange={purenessChangeHandler} />
                        <p>Enter values between 0 to 6</p>
                    </div>
                    <div className={classes.filter__control}>
                        <label>Breed Count</label>
                        <input type='number' min='0' max='7' placeholder="Value between 0 to 7" onChange={breedCountChangeHandler} />
                    </div>
                    <div className={classes.range__container} >
                        <div className={classes.filter__control}>
                            <fieldset>
                                <legend>HP</legend>
                                <label for="min">Min</label>
                                <input id="min" name="min" type='number' onChange={hpChangeHandler} />
                                <label for="max">Max</label>
                                <input id="max" name="max" type='number' onChange={hpChangeHandler} />
                            </fieldset>
                        </div>
                        <div className={classes.filter__control}>
                            <fieldset className={classes.filter__fieldset}>
                                <legend>Skill</legend>
                                <label for="min">Min</label>
                                <input id="min" name="min" type='number' onChange={skillChangeHandler} />
                                <label for="max">Max</label>
                                <input id="max" name="max" type='number' onChange={skillChangeHandler} />
                            </fieldset>
                        </div>
                        <div className={classes.filter__control}>
                            <fieldset>
                                <legend>Speed</legend>
                                <label for="min">Min</label>
                                <input id="min" name="min" type='number' onChange={speedChangeHandler} />
                                <label for="max">Max</label>
                                <input id="max" name="max" type='number' onChange={speedChangeHandler} />
                            </fieldset>
                        </div>
                        <div className={classes.filter__control}>
                            <fieldset>
                                <legend>Morale</legend>
                                <label for="min">Min</label>
                                <input id="min" name="min" type='number' onChange={moraleChangeHandler} />
                                <label for="max">Max</label>
                                <input id="max" name="max" type='number' onChange={moraleChangeHandler} />
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className={classes.filter__actions}>
                    <button type='submit'>Search</button>
                </div>
            </form>
        </>
    );
};

export default FilterForm;