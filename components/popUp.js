import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from '../styles/modal.module.css';

var frequency = 0;

function PopUp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / (pageHeight - windowHeight)) * 100;
      if (scrollPercentage >= 10 && !modalIsOpen && frequency == 0) {

        setModalIsOpen(true);
      }
    }


  window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      frequency = 1;
      console.log(frequency);
    };
  }, [modalIsOpen]);

return (
    <div>
        <Modal className={styles.modal} isOpen={modalIsOpen}>
            <div>
                <form action="https://github.us21.list-manage.com/subscribe/post?u=25ca49d2ee853a0049c897437&amp;id=8f0f70b342&amp;f_id=0085b3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <h2> Subscribe &amp; Receive Important Updates From MyWebClass.org</h2>
                        <div className={styles.popUp}>
                        <fields>

                            <label for = "mce-EMAIL">Email Address*</label>
                                <textinput>
                                <input type="email" name="EMAIL" class ="required email" id="mce-EMAIL">
                                </input>
                                </textinput>

                                <buttons>
                                <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                                Subscribe
                                </button>

                                <button onClick={() => setModalIsOpen(false)}>Close</button>
                                </buttons>
                        </fields>
                        </div>
                        <div class="response" id="mce-error-response"></div>
                        <div class="response" id="mce-error-response"></div>
                </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>

             <script
            dangerouslySetInnerHTML={{
                __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`
                }}
                />


        </Modal>
    </div>
  );
}

export default PopUp;