import React from 'react'

export default function Mailchimp() {
  return (
	<div id="mc_embed_signup">
		<form action="https://locusfest.us10.list-manage.com/subscribe/post?u=068684a7396de5c823ecf353a&amp;id=c06fcbf8e3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
			<div id="mc_embed_signup_scroll">
			
		<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
		<div className="mc-field-group">
			<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
		</label>
			<input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
		</div>
			<div id="mce-responses" className="clear foot">
				<div className="response" id="mce-error-response" style={{"display":"none"}}></div>
				<div className="response" id="mce-success-response" style={{"display":"none"}}></div>
			</div>    
			<div style={{"position": "absolute","left": "-5000px"}} aria-hidden="true"><input type="text" name="b_068684a7396de5c823ecf353a_c06fcbf8e3" tabindex="-1" value="" /></div>
				<div className="optionalParent">
					<div className="clear foot">
						<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
						<p className="brandingLogo"><a href="http://eepurl.com/h3rBSz" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
					</div>
				</div>
			</div>
		</form>
	</div>
  )
}
