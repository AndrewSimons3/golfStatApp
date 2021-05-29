import classes from './StatsEntry.module.css';

const StatsEntry = () => {
  return (
    <div className={classes.statsEntryWrapper}>
      <form>
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
           <label htmlFor="Fairways">Fairways</label>
          <input 
            id="fairways" 
            type="number" 
          />
           <label htmlFor="Greens">Greens</label>
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
          <SubmitButton type="submit">SUBMIT</Button>
        </form>
    </div>
  )
};

export default StatsEntry;