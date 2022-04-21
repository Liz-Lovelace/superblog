import SideNote from './SideNote.js';
import styles from './Guide.module.css';
import DiskList from './DiskList.js';

export default function Guide(){
  return <section className={styles.guide}>
    <h6> Reading pro tips </h6>
    <DiskList>
      <li> Click on images to open them in full size</li>
      <li> Blue circles
        <SideNote n='0'> 
          Yeah, those
        </SideNote> 
        have extra content in them
      </li>
    </DiskList>

  </section>
}