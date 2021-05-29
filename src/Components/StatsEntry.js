import classes from './StatsEntry.module.css';
import SubmitButton from './SubmitButton';

const StatsEntry = () => {
  return (
    <div className={classes.statsEntryWrapper}>
      <div className={classes.formWrapper}>
        <form className={classes.userForm}>
            <label htmlFor="username">Username</label>
            <input 
              id="username" 
              type="text" 
            />
            <label htmlFor="course">Course</label>
            <input 
              id="course" 
              type="text" 
            />
            <label htmlFor="date">Date</label>
            <input 
              id="date" 
              type="text" 
            />
        </form>

        <form className={classes.statsForm}>
            <label htmlFor="Fairways">Fairways Hit</label>
            <input 
              id="fairways" 
              type="number" 
            />
            <label htmlFor="Greens">Greens in Regulation</label>
            <input 
              id="greens" 
              type="number" 
            />
            <label htmlFor="date">Up & Downs</label>
            <input 
              id="date" 
              type="number" 
            />
            <label htmlFor="date">Putts</label>
            <input 
              id="number" 
              type="number" 
            />
            <SubmitButton>SUBMIT</SubmitButton>
          </form>
        </div> 
    </div>
  )
};

export default StatsEntry;