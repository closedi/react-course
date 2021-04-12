import styles from './dialogs.module.css'
import {Dialog} from "./dialog/Dialog";

export const Dialogs = (props) => {
    let dialogs = props.state.map((dialog, idx) => <Dialog name={dialog.name.first} key={idx}/>)

  return (
    <section className={styles.dialogs}>
      <div className={styles.dialogs_list}>
          {dialogs}
          {/*<NavLink to="dialogs/Ivan">Ivan</NavLink>*/}
      </div>
    </section>
  )
}

