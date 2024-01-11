import React from 'react';
import '../index.css';

const Home = () => {
    // let mainLiftLB = ['Trap Bar Deadlift', 'Front Squat', 'Deadlift', 'Back Squat', 
    //                 'Sumo Deadlift', 'Box Squat', 'Barbell Reverse Lunge', 'Barbell Split Squat'];
    // let heavyCompoundLiftLB = ['Trap Bar Deadlift', 'Front Squat', 'Deadlift', 'Back Squat', 
    // 'Sumo Deadlift', 'Box Squat', 'Barbell Reverse Lunge', 'Barbell Split Squat'];
    // let lbMainLift = mainLiftLB[Math.floor(Math.random() * mainLiftLB.length)];
    // let lbHCL = heavyCompoundLiftLB[Math.floor(Math.random() * heavyCompoundLiftLB.length)];

    class Exercise {
        constructor (exercises) {
          this.exercisename = exercises;
        }
        random() {
          return this.exercisename[Math.floor(Math.random() * this.exercisename.length)]
        }
      }
      
      let mainLiftLB = new Exercise (['Trap Bar Deadlift', 'Front Squat', 'Deadlift', 'Back Squat', 
                            'Sumo Deadlift', 'Box Squat', 'Barbell Reverse Lunge', 'Barbell Split Squat', 'Barbell Bulgarian Split Squat']);
      let core = new Exercise (['Deadbug', 'Stir-the-Pot','Plank With Alternate Arm Reach', 'Plank Pull-Through', 'Palloff Press', 'Wide-Stance Anti-Rotation Cable Chop'])
      let heavyCompoundLiftLB = new Exercise (['Anterior Loaded Reverse Lunge', 'Anterior Loaded Step-Up', 'Anterior Loaded Bulgarian Split Squat', 'Anterior Loaded Split Squat', 
                            'Rack Pull From Mid-Shin', 'Good Mornings', 'Barbell Hip Thrust', 'Heavy KB Get-up','Barbell Split Squat', 'Barbell RDL']);
      let verticalPush = new Exercise (['DB Overhead Press', '1/2 Kneeling 1-Arm Landmine Press', 'Standing 1-Arm Landmine Press',
                            '1/2 Kneeling 1-Arm Kettlebell Press', 'Standing 1-Arm Landmine Push-Press', 'Standing 1-Arm Landmine Push Press With Rotation', 'DB Seated Press', 'DB Push Press',
                            'BB Push Press'])
      let supplementOneLB = new Exercise (['Walking DB Lunge', '1-Arm KB Lateral Lunge', 'KB Lateral Lunge', 'DB Front Foot Elevated Reverse Lunge', 'DB Reverse Lunge', '1-Arm KB Front Squat', '1-Leg Squat From Bench', 'DB Reverse Lunge to RDL'])
      let verticalHorzPull = new Exercise (['Chin-Ups', 'Pull-Ups', 'DB Pullovers', '1-Arm DB Row', 'Seated DB Row', 'Bent Over DB Row', '1-Arm Cable Row', 'High-To-Low Cable Pulldown', 'Facepulls'])
      let mainLiftUB = new Exercise (['Barbell Bench Press', 'Narrow Grip Barbell Bench Press', 'Barbell Floor Press', 'Paused Barbell Bench Press'])
    return( 
        <div style = {{background: "black", alignItems: "center"}}>
          <h1 className = "header-style">Workouts This Week</h1> 
          <div style = {{display: "flex", justifyContent: "center", padding: "20px", color: "white", border: "1px solid red"}}>
          <div style ={{border: "1px solid green", margin: "20px"}} >
          <h3> Day 1 </h3>
          <p>A1: {mainLiftLB.random()}</p>
          <p>A2: {core.random()} </p>
          <p>B1: {heavyCompoundLiftLB.random()} </p>
          <p>B2: {verticalPush.random()} </p>
          <p>C1: {supplementOneLB.random()} </p>
          <p>C2: {verticalHorzPull.random()} </p>
          </div>

          <div style ={{border: "1px solid blue", margin: "20px"}} >
          <h3> Day 2 </h3>
          <p>A1: {mainLiftUB.random()}</p>
          <p>A2: {core.random()} </p>
          <p>B1: {heavyCompoundLiftLB.random()} </p>
          <p>B2: {verticalPush.random()} </p>
          <p>C1: {supplementOneLB.random()} </p>
          <p>C2: {verticalHorzPull.random()} </p>
          </div>
          </div>
          <button onClick>Click ME!</button>
          </div>
    )
}



export default Home