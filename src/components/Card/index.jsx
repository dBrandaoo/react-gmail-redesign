const Card = ( {styles} ) => (
    <div className={styles.card}>
    <div className={`${styles.profile} mx-5 pt-5`}>
      <img src="https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png" alt="profile-pic" className="h-12 w-12 rounded-full"></img>
      <p className="text-left text-gray-600 font-bold pr-32">Username</p>
      <p className="text-xs text-gray-400">15 min ago</p>
    </div>
    <div className="text-left indent-7 pt-6">
      <p className="text-gray-700 font-bold">Email subject</p>
      <p className="text-gray-500">This is a preview of the message...</p>
    </div>
  </div>
)

export default Card