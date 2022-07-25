import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStar, faFileLines, faEnvelope, faPaperPlane, faPencil, faGear } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './sidebar.module.css'

const Sidebar = () => (
    <div className={styles.sidebar}>
    <div className={styles.centerImage}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="mail-icon" className="h-16 w-16 my-12 l"></img>
    </div>
  
    <button className="font-semibold text-gray-400"><span className="pr-6 text-center"><FontAwesomeIcon icon={faEnvelope} /></span> Inbox</button>
    <button className="font-semibold text-gray-400"><span className="pr-6 text-center"><FontAwesomeIcon icon={faStar} /></span> Favorites</button>
    <button className="font-semibold text-gray-400"><span className="pr-6 text-center"><FontAwesomeIcon icon={faFileLines} /></span> Drafts</button>
    <button className="font-semibold text-gray-400"><span className="pr-6 text-center"><FontAwesomeIcon icon={faPaperPlane} /></span> Send</button>
    <button className="font-semibold text-gray-400"><span className="pr-6 text-center"><FontAwesomeIcon icon={faTrash} /></span> Trash</button>

    <div className={`pt-8 ${styles.addLabel}`}>
      <p className="text-center text-sm font-bold">LABELS</p>
      <button className="text-center text-red-600 font-bold">+</button>
    </div>

    <div className={`${styles.labels} text-gray-400 font-semibold`}>
      <button className="mt-8 h-12"><span className="pr-2 text-blue-400"><FontAwesomeIcon icon={faCircle} /></span>Office</button>
      <button className="h-12"><span className="pr-2 text-orange-500"><FontAwesomeIcon icon={faCircle} /></span>Clients</button>
    </div>

    <div className={styles.footerButtons}>
        <button type="button" className="bg-[#E12E3A] text-white mx-8 h-14 rounded-xl hover:bg-red-700 font-semibold"><FontAwesomeIcon icon={faPencil} /> <span className="pl-2">New Message</span></button>
        <button type="button" className="text-left indent-16 text-sm text-gray-400 font-semibold"><FontAwesomeIcon icon={faGear} /> <span className="pl-2">Settings</span></button>
    </div>

  </div>
)

export default Sidebar