import styles from './dialogs.module.css'

export const Dialogs = () => {

  return (
    <section className={styles.dialogs}>
      <div className={styles.dialogsList}></div>
      <div className={styles.activeDialog}></div>
    </section>
  )
}
