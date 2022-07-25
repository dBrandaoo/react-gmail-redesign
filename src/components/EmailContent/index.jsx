const EmailContent = ( {styles} ) => (
    <>
        <div className={`${styles.emailHeader} mx-12`}>
            <img src="https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png" alt="profile-picture" className="h-16 w-16 rounded-full"></img> {/* Senders profile pic */}
            <div className={styles.headerInfo}>
              <p className="font-semibold text-gray-600">Jon Snow</p> {/* Senders name */}
              <p className="text-right text-sm text-gray-500">15 min ago</p> {/* Time sent */}
              <p className="text-3xl text-gray-700 font-semibold">White walkers are real </p> {/* Subject */}
            </div>
        </div>

        <div className={`${styles.emailBody} pt-12`}>
            <p className="text-left mx-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in dignissim erat. Proin aliquam tellus sed massa varius malesuada. Suspendisse a orci sagittis, dignissim odio pharetra, ornare est. Donec convallis pellentesque quam sed venenatis. Aliquam congue mollis tellus, in vulputate risus pretium in. Maecenas egestas nisi nec lacinia porttitor. Aliquam erat volutpat. Morbi dapibus dapibus ligula, et aliquam sapien vehicula ac. Sed quis eleifend nisl, sed convallis urna. Etiam eget efficitur nisl. Nullam non est justo.

Ut orci tortor, eleifend eu nisl sed, finibus plac tortor, eleifend eu nisl sed, finibus placerat arcu. Duis eget metus faucibus, egestas ipsum quis, posuere libero. Quisque nec mauris soll tortor, eleifend eu nisl sed, finibus placerat arcu. Duis eget metus faucibus, egestas ipsum quis, posuere libero. Quisque nec mauris soll tortor, eleifend eu nisl sed, finibus placerat arcu. Duis eget metus faucibus, egestas ipsum quis, posuere libero. Quisque nec mauris sollerat arcu. Duis eget metus faucibus, egestas ipsum quis, posuere libero. Quisque nec mauris sollicitudin, luctus elit in, tincidunt est. Aliquam elit arcu, posuere non ante sed, porttitor placerat magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis ligula tristique leo venenatis consequat. Vestibulum tristique varius pulvinar. Ut non elit viverra, semper mi sit amet, commodo quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed vulputate dolor. Aliquam tincidunt ligula felis, vel gravida ante bibendum in. Cras laoreet tempus nisi, ac hendrerit massa cursus at. Sed vulputate ligula vitae ultricies egestas. Morbi maximus ultricies justo. Phasellus consequat nec arcu sed ultricies. Vivamus placerat ultrices volutpat. Aenean euismod mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in dignissim erat. Proin aliquam tellus sed massa varius malesuada. Suspendisse a orci sagittis, dignissim odio pharetra, ornare est. Donec convallis pellentesque quam sed venenatis. Aliquam congue mollis tellus, in vulputate risus pretium in. Maecenas egestas nisi nec lacinia porttitor. Aliquam erat volutpat. Morbi dapibus dapibus ligula, et aliquam sapien vehicula ac. Sed quis eleifend nisl, sed convallis urna. Etiam eget efficitur nisl. Nullam non est justo.</p>
        </div> {/* Email */}
    </>
)

export default EmailContent