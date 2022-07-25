import EmailContent from "../../components/EmailContent"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faReply, faShare, faReplyAll, faSort, faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './email.module.css'
import contentStyles from './emailContent.module.css'

const Email = () => (
    <div className={styles.email}>
    <div className={`${styles.emailWrapper} pt-8`}>
      <div className={`${styles.buttons} pt-5`}>
        <div className={`${styles.mainButtons} mx-12 text-gray-400`}>
          <button><FontAwesomeIcon icon={faReply} /></button>
          <button><FontAwesomeIcon icon={faShare} /></button>
          <button className={styles.replyAll}><FontAwesomeIcon icon={faReplyAll} /></button>
          <button className="text-blue-400"><FontAwesomeIcon icon={faCircle} /></button>
          <button className="text-yellow-400"><FontAwesomeIcon icon={faStar} /></button>
        </div>
        <div className="text-right mr-16 text-red-500">
          <button><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>

      <div className="bg-[#F3F4F6] mx-12 py-6 my-8 rounded text-sm text-gray-400">
        <p>0 Previous Messages <span className="pl-2"><FontAwesomeIcon icon={faSort} /></span></p>
      </div>

        <EmailContent styles={contentStyles}/>

      <div className={styles.shortMessage}>
        <input className="text-gray-500 text-sm mt-8 bg-[#F7F9FD] h-12 rounded-full w-4/5 mx-12 indent-4 ml-[75px]" placeholder="Message"></input>
        <button type="button" className={`${styles.sendButton} text-red-500`}><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
    </div>
  </div>
)

export default Email