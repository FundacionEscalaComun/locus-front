import React from 'react'

export default function Mailchimp() {
  return (
	<div id="mc_embed_signup">
		<form action="https://locusfest.us10.list-manage.com/subscribe/post?u=068684a7396de5c823ecf353a&amp;id=c06fcbf8e3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
			<div id="mc_embed_signup_scroll">
				<div className="mc-field-group text-center">
					<label htmlFor="mce-EMAIL" className='block my-4'>Email  <span className="asterisk">*</span>
					</label>
					<input type="email" name="EMAIL" className="required email rounded-full  mb-4" id="mce-EMAIL" />
				</div>
				<div id="mce-responses" className="clear foot">
					<div className="response" id="mce-error-response" style={{"display":"none"}}></div>
					<div className="response" id="mce-success-response" style={{"display":"none"}}></div>
				</div>    
				<div style={{"position": "absolute","left": "-5000px"}} aria-hidden="true"><input type="text" name="b_068684a7396de5c823ecf353a_c06fcbf8e3" tabIndex="-1" value="" readOnly /></div>
				<div className="optionalParent">
					<div className="clear foot text-center">
						<input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" className="button small font-semibold" />
						{/* <p className="brandingLogo"><a href="http://eepurl.com/h3rBSz" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" className='inline-block mt-2' /></a></p> */}
					</div>
				</div>
			</div>
		</form>
	</div>
  )
}
