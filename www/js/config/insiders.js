


var INSIDER_RESOURCES = {

	insiders: [

		// 00: BGM Talking Points - New Fill
		{
			title: "BGM: Talking Points - New Fill",
			upperContent: '<div class="insider-padding">\
					<div class="insider-title">Blood Glucose Monitoring</div>\
					<div class="insider-tag"><span>NEW FILL</span> <span>(ORAL/INSULIN/TEST STRIPS)</span></div>\
					<div class="insider-text-annotation insider-margin-top-med" ng-show="showAnnotation()">\
						<p>Sometimes it only takes a question to start a useful <span class="insider-bold-g">DIALOGUE!</span></p>\
						<p>These are suggested questions to help you engage your diabetes customer to help start the dialogue. You can ask as few or as many questions as you would like. If you have limited time, you may want to just focus on the highlighted information.</p>\
						<p class="insider-italic">Patients can find a diabetes educator in their area through <span class="insider-link insider-link-blue" ng-click="onLink($event)">www.diabeteseducator.org</span></p>\
					</div>\
					<div class="insider-subtitle insider-margin-top-med">Engagement</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b insider-bold"><div>Do you have any questions or concerns about your diabetes?</div></li>\
						<li class="insider-bullet-b"><div>Have you met with a diabetes educator?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Have you been trained on using your blood glucose meter?</div></li>\
						<li class="insider-bullet-b"><div>What are the diabetes management goals you and your physician discussed (set)? </div></li>\
						<li class="insider-bullet-b"><div>What are your daily testing goals (frequency)?</div></li>\
					</ul>\
					<div class="insider-subtitle">Testing Guidelines (General)</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>In addition to taking your medications correctly and eating well, regularly monitoring your blood sugar is one of the most important things you can do to help control your diabetes.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Blood glucose monitoring can help you understand the impact your medication, meals, and/or exercise have on your blood sugar.</div></li>\
						<li class="insider-bullet-b"><div>Testing at least two times a day before meals and sometimes after meals (or during other times of the day) helps your doctor or pharmacist know when therapy needs to be adjusted.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Paired Testing – a test before a meal (or activity) and 2 hours after the same meal (or activity) – shows you what the meal/activity does to your blood sugar.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Paired Testing helps identify patterns and can provide positive feedback on lifestyle choices.</div></li>\
						<li class="insider-bullet-b"><div>Setting up a testing routine – based upon your physician’s testing regimen – helps you stay on track and provides a good snapshot of your level of control.</div></li>\
						<li class="insider-bullet-b"><div>In addition to checking your blood sugar on your set schedule, you should also check your blood sugar whenever you feel like your blood sugar is too high or low because it can tell you if you need to have a carbohydrate snack or if you need medical attention.</div></li>\
					</ul>\
					<div class="insider-subtitle">Individual Testing Recommendations&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="It’s important that your diabetes patient understands why their diabetes healthcare professional is recommending the testing regimen and what the numbers mean.</>What should the customer be looking for and when?"><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>Review their physician testing recommendation.</div></li>\
						<li class="insider-bullet-b"><div>Vary testing times (suggest Paired Testing).</div></li>\
						<li class="insider-bullet-b"><div>\
							Things to help you adhere to your Doctor’s recommendation are:\
							<ul class="insider-ul-sub">\
								<li class="insider-bullet-s insider-bold"><div>Write down your goals and testing regimen recommended by your physician or educator.</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Set-up your blood glucose meter’s audible reminder to remind you to test.</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Keep a log of your BG testing, meals, activity, and medication.</div></li>\
							</ul>\
						</div></li>\
					</ul>\
					&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="insider-popover-annotation insider-margin-top-big" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="Based upon the direction your engagement question takes you, select diabetes management info from this section to help inform your diabetes patient on the importance of blood glucose management."><span>HELPFUL TIP</span><i class="ion-heart"></i></span>\
				</div>\
				<div class="insider-info-script insider-margin-top-big btn-smooth" ng-click="onInsiderPDF()">\
					<div class="insider-info-content">\
						<p>"Let’s chat in a few weeks and see what’s working and what’s not."</p>\
						<p><span class="insider-info-green"><span>SHARE</span> the Know Your Numbers informational guide that can help your patient understand the essentials of blood glucose monitoring.</span></p>\
					</div>\
					<div class="insider-info-footer">\
						<span class="insider-bold-g">Patient Support Material</span>\
						<span>Know Your<sup class="sup-tm">TM</sup> Numbers Guide&nbsp<i class="ion-arrow-right-c"></i></span>\
					</div>\
				</div>\
				<div class="insider-padding-annotation row responsive-pr insider-row insider-margin-top-bhm" ng-show="showAnnotation()">\
					<div class="col-49">\
						<div class="insider-fig-00-01 insider-fig-big"></div>\
					</div>\
					<div class="col-3"></div>\
					<div class="col-45">\
						<div class="insider-text-annotation insider-bold-n">\
							<p>For a newly diagnosed diabetes patient, the CONTOUR<sup>®</sup>NEXT EZ meter is a very good choice because of its ease-of-use and high accuracy.</p>\
							<p>Additionally, the CONTOUR<sup>®</sup>NEXT EZ  meter provides both meal-markers and audible reminders, to help your patient get actionable information.</p>\
						</div>\
					</div>\
				</div>\
				', 
			hasNavButtons: false,
			hasFooter: true,
			hasScriptButtons: true,
			scriptSection: "Healthy Eating",
			scriptName: "Talking Points - New Fill&nbsp<i class='ion-arrow-right-c'></i>",
			hasScriptButtonsA: true,
			scriptSectionA: "Blood Glucose Monitoring",
			scriptNameA: "Talking Points - ReFill&nbsp<i class='ion-arrow-right-c'></i>",
			pdfIndex: 0
		},

		// 01: BGM Talking Points - Refill
		{
			title: "BGM: Talking Points - Refill",
			upperContent: '<div class="insider-padding">\
					<div class="insider-title">Blood Glucose Monitoring</div>\
					<div class="insider-tag"><span>REFILL</span> <span>(ORAL/INSULIN/TEST STRIPS)</span></div>\
					<div class="insider-text-annotation insider-margin-top-med" ng-show="showAnnotation()">\
						<p>Sometimes it only takes a question to start a useful <span class="insider-bold-g">DIALOGUE!</span></p>\
						<p>These are suggested questions to help you engage your diabetes customer to help start the dialogue. You can ask as few or as many questions as you would like. If you have limited time, you may want to just focus on the highlighted information.</p>\
						<p class="insider-italic">Patients can find a diabetes educator in their area through <span class="insider-link insider-link-blue" ng-click="onLink($event)">www.diabeteseducator.org</span></p>\
					</div>\
					<div class="insider-subtitle insider-margin-top-med">Engagement</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>How long have you had diabetes? (How long have you been on this medication?)</div></li>\
						<li class="insider-bullet-b insider-bold"><div>How are you doing managing your diabetes? How are your numbers?</div></li>\
						<li class="insider-bullet-b"><div>Do you have any questions or concerns?</div></li>\
						<li class="insider-bullet-b"><div>How are you tolerating your medication?</div></li>\
						<li class="insider-bullet-b"><div>Do you think it’s working?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Is there anything you would like to discuss regarding your diabetes management?</div></li>\
						<li class="insider-bullet-b"><div>What are the management goals you and your physician discussed (set)?</div></li>\
						<li class="insider-bullet-b"><div>When was the last time you reviewed your goals with your physician?</div></li>\
						<li class="insider-bullet-b"><div>Do you feel you are in control of your diabetes?</div></li>\
						<li class="insider-bullet-b"><div>How often do you test each day?</div></li>\
						<li class="insider-bullet-b"><div>Are you testing as often as you would like? If not – Why?</div></li>\
						<li class="insider-bullet-b"><div>What helps you manage your diabetes the most?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>What stops you from managing effectively – any problems or obstacles?</div></li>\
					</ul>\
					<div class="insider-subtitle">Testing Guidelines (General)</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b insider-bold"><div>Blood glucose monitoring is supposed to help you understand the impact your medication, meals, and/or exercise have on your blood sugar.</div></li>\
						<li class="insider-bullet-b"><div>Testing at least two times a day before meals and sometimes after meals (or during other times of the day) helps your doctor know when therapy needs to be adjusted.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Paired Testing – a test before a meal (or activity) and 2 hours after the meal (or activity) – shows you what the meal/activity does to your blood sugar.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Paired Testing helps identify patterns and can provide positive feedback on lifestyle choices.</div></li>\
						<li class="insider-bullet-b"><div>\
							Do you have a routine testing schedule?\
							<ul class="insider-ul-sub">\
								<li class="insider-bullet-s"><div>What is your current testing regimen?</div></li>\
								<li class="insider-bullet-s"><div>How many times per day?</div></li>\
								<li class="insider-bullet-s"><div>What times of day?</div></li>\
							</ul>\
						</div></li>\
					</ul>\
					<div class="insider-subtitle">Individual Testing Recommendations&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="It’s important that your diabetes patient understands why their diabetes healthcare professional is recommending the testing regimen and what the numbers mean.</>What should the customer be looking for and when?"><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>Review their physician testing recommendation, or</div></li>\
						<li class="insider-bullet-b"><div>Help patient set up a testing routine they can easily follow.</div></li>\
						<li class="insider-bullet-b"><div>Vary testing times (suggest Paired Testing).</div></li>\
						<li class="insider-bullet-b insider-bold"><div>\
							Things to help you adhere to your Doctor’s recommendation are:\
							<ul class="insider-ul-sub">\
								<li class="insider-bullet-s insider-bold"><div>Write down your goals and testing regimen recommended by your physician or educator.</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Set-up your blood glucose meter’s audible reminder to remind you to test.</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Keep a log of your BG testing, meals, activity, and medication.</div></li>\
							</ul>\
						</div></li>\
					</ul>\
					&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="insider-popover-annotation insider-margin-top-big" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="Based upon the direction your engagement question takes you, select diabetes management info from this section to help inform your diabetes patient on the importance of blood glucose management."><span>HELPFUL TIP</span><i class="ion-heart"></i></span>\
				</div>\
				<div class="insider-info-script insider-margin-top-big btn-smooth" ng-click="onInsiderPDF()">\
					<div class="insider-info-content">\
						<p>"Let’s chat in a few weeks and see what’s working and what’s not."</p>\
						<p><span class="insider-info-green"><span>SHARE</span> the Know Your Numbers informational guide that can help your patient take control of their diabetes.</span></p>\
					</div>\
					<div class="insider-info-footer">\
						<span class="insider-bold-g">Patient Support Material</span>\
						<span>Know Your<sup class="sup-tm">TM</sup> Numbers Guide&nbsp<i class="ion-arrow-right-c"></i></span>\
					</div>\
				</div>\
				<div class="insider-padding-annotation row responsive-pr insider-row insider-margin-top-bhm" ng-show="showAnnotation()">\
					<div class="col-45">\
						<div class="insider-fig-01-01 insider-fig-big"></div>\
					</div>\
					<div class="col-3"></div>\
					<div class="col-52">\
						<div class="insider-text-annotation insider-bold-n no-margin">\
							<p>The CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT USB meters have an AUTOLOG feature that automatically prompts the patient to mark their BG result. Patients can add a note to their BG result – such as before or after exercise.</p>\
							<p>Additionally, patients can set an audible reminder to remind them to test afterwards.</p>\
							<p>Only the CONTOUR<sup>®</sup>NEXT portfolio of meters offer both meal-markers and audible reminders.</p>\
						</div>\
					</div>\
				</div>\
				',
			hasNavButtons: false,
			hasFooter: true,
			hasScriptButtons: true,
			scriptSection: "Healthy Eating",
			scriptName: "Talking Points - ReFill&nbsp<i class='ion-arrow-right-c'></i>",
			hasScriptButtonsA: false,
			scriptSectionA: "",
			scriptNameA: "",
			pdfIndex: 0
		},

		// 02: HE Talking Points - New Fill
		{
			title: "HE: Talking Points - New Fill",
			upperContent: '<div class="insider-padding">\
					<div class="insider-title">Healthy Eating</div>\
					<div class="insider-tag"><span>NEW FILL</span> <span>(ORAL/INSULIN/TEST STRIPS)</span></div>\
					<div class="insider-text-annotation insider-margin-top-med" ng-show="showAnnotation()">\
						<p>Sometimes it only takes a question to start a useful <span class="insider-bold-g">DIALOGUE!</span></p>\
						<p>These are suggested questions to help you engage your diabetes customer to help start the dialogue. You can ask as few or as many questions as you would like. If you have limited time, you may want to just focus on the highlighted information.</p>\
						<p class="insider-italic">Patients can find a diabetes educator in their area through <span class="insider-link insider-link-blue" ng-click="onLink($event)">www.diabeteseducator.org</span></p>\
					</div>\
					<div class="insider-subtitle insider-margin-top-med">Engagement</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b insider-bold"><div>Do you understand the relationship between diabetes and healthy eating?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Do you potentially see any “difficult areas or issues” in your lifestyle that you need to be mindful of?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Generally, how would you rate your diet? (Very good / Good / Poor?) </div></li>\
						<li class="insider-bullet-b"><div>Have you met with a diabetes educator and/or dietitian?</div></li>\
					</ul>\
					<div class="insider-subtitle">Nutritional Guidelines</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b insider-bold"><div>Healthy eating goes hand-in-hand with your ability to successfully manage your diabetes.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>The two main areas of focus of healthy eating are portion control and the type of food you are eating.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Testing your blood sugar before and then 2 hours after a meal allows you to learn the effect of that meal on your blood sugar – This can help you make healthy food choices and learn how to plan meals.&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="The CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT USB meters have Before-meal and After-meal markers to allow you to perform <span class=\'insider-bold-n\'>paired testing</span>, plus reminds you when it’s time to test after a meal, with an audible reminder."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
						<li class="insider-bullet-b"><div>The nutrition label helps keep you informed of the recommended serving size and the amount of carbohydrates in each serving.</div></li>\
						<li class="insider-bullet-b"><div>Carbohydrates are the body’s main source of energy and the American Diabetes Association recommends a minimum of 130g of carbohydrates per day.&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="The CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT USB meters have a carb-counting feature that easily logs carbs."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
						<li class="insider-bullet-b"><div>One serving size of carbohydrates is about 15g, which would be a portion of cereal the size of a tennis ball, bread the size of a cassette tape, or a piece of cake the size of a dental floss container.</div></li>\
						<li class="insider-bullet-b"><div>Lean proteins (e.g. skinless chicken, fish, and egg whites) are a great source of daily nutrients and keep you feeling full, longer.</div></li>\
						<li class="insider-bullet-b"><div>Saturated fats can raise your cholesterol and put you at a higher risk for heart disease – try to limit your fat intake.&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="People with diabetes should eat a variety of foods each day. Carbs from vegetables, fruits, whole grains and dairy products instead of carbs with added sugar, fat and salt."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
					</ul>\
					<div class="insider-subtitle">Recommendations and Monitoring&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="Its important that your diabetes customer understand why their diabetes healthcare professional is recommending the testing regimen and what the numbers mean.</>What should the customer be looking for and when?"><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>Visit with a diabetes educator or a dietitian.</div></li>\
						<li class="insider-bullet-b"><div>Understand portion sizes. A high carb food portion should be no larger than the size of your fist.</div></li>\
						<li class="insider-bullet-b"><div>Regularly monitoring your blood sugar is one of the most important things you can do to help control your diabetes.</div></li>\
						<li class="insider-bullet-b"><div>Set your Blood Glucose meter up to track your before and after meal results (paired testing) so you know the effect your meal has on your blood sugar.</div></li>\
						<li class="insider-bullet-b"><div>\
							Some quick tips for healthy eating are:\
							<ul class="insider-ul-sub">\
								<li class="insider-bullet-s"><div>Plan your meals and include all food groups</div></li>\
								<li class="insider-bullet-s"><div>Keep a food log and monitor carb in-take&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="There are food record log sheets, even phone apps, that can help you track your food intake quantity and quality."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
								<li class="insider-bullet-s"><div>Space your meals evenly</div></li>\
								<li class="insider-bullet-s"><div>Avoid skipping meals – to avoid over-eating at your next meal</div></li>\
								<li class="insider-bullet-s"><div>Snacks can help reduce your hunger while adding a nutritious energy boost to your day</div></li>\
								<li class="insider-bullet-s"><div>If you eat out a lot, go to restaurants that make it easier for you to follow your meal plan and limit your portion size to one serving - Take the rest to-go.</div></li>\
							</ul>\
						</div></li>\
					</ul>\
				</div>\
				<div class="insider-info-script insider-margin-top-big btn-smooth" ng-click="onInsiderPDF()">\
					<div class="insider-info-content">\
						<p>"Let’s chat in a few weeks and see what’s working and what’s not."</p>\
						<p><span class="insider-info-green"><span>SHARE</span> the Know Your Nutrition informational guide, designed to give your patient more insight and help them manage their diabetes.</span></p>\
					</div>\
					<div class="insider-info-footer">\
						<span class="insider-bold-g">Patient Support Material</span>\
						<span>Know Your<sup class="sup-tm">TM</sup> Nutrition Guide&nbsp<i class="ion-arrow-right-c"></i></span>\
					</div>\
				</div>\
				<div class="insider-padding-annotation row responsive-pr insider-row insider-margin-top-bhm" ng-show="showAnnotation()">\
					<div class="col-49">\
						<div class="insider-fig-02-01 insider-fig-big"></div>\
					</div>\
					<div class="col-3"></div>\
					<div class="col-45">\
						<div class="insider-text-annotation insider-bold-n">\
							<p>For a newly diagnosed diabetes patient, the CONTOUR<sup>®</sup>NEXT EZ meter is a very good choice because of its ease-of-use and high accuracy.</p>\
							<p>Additionally, the CONTOUR<sup>®</sup>NEXT EZ  meter provides both meal-markers and audible reminders, to help your patient get actionable information.</p>\
						</div>\
					</div>\
				</div>\
				',
			hasNavButtons: false,
			hasFooter: true,
			hasScriptButtons: true,
			scriptSection: "Physical Activity",
			scriptName: "Talking Points - New Fill&nbsp<i class='ion-arrow-right-c'></i>",
			hasScriptButtonsA: true,
			scriptSectionA: "Healthy Eating",
			scriptNameA: "Talking Points - ReFill&nbsp<i class='ion-arrow-right-c'></i>",
			pdfIndex: 1
		},

		// 03: HE Talking Points - Refill
		{
			title: "HE: Talking Points - Refill",
			upperContent: '<div class="insider-padding">\
					<div class="insider-title">Healthy Eating</div>\
					<div class="insider-tag"><span>REFILL</span> <span>(ORAL/INSULIN/TEST STRIPS)</span></div>\
					<div class="insider-text-annotation insider-margin-top-med" ng-show="showAnnotation()">\
						<p>Sometimes it only takes a question to start a useful <span class="insider-bold-g">DIALOGUE!</span></p>\
						<p>These are suggested questions to help you engage your diabetes customer to help start the dialogue. You can ask as few or as many questions as you would like. If you have limited time, you may want to just focus on the highlighted information.</p>\
						<p class="insider-italic">Patients can find a diabetes educator in their area through <span class="insider-link insider-link-blue" ng-click="onLink($event)">www.diabeteseducator.org</span></p>\
					</div>\
					<div class="insider-subtitle insider-margin-top-med">Engagement</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>Is there anything you would like to discuss regarding your diabetes management?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Generally, how do you rate your diet? (Very good / Good / Poor)</div></li>\
						<li class="insider-bullet-b"><div>Is there anything about your nutrition plan you want to discuss?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>What do you consider your biggest obstacle in maintaining a healthy diet?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Have you met with a diabetes educator and/or dietitian?</div></li>\
					</ul>\
					<div class="insider-subtitle">Nutritional Guidelines&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="One of the most important tools for controlling diabetes progression is the achievement of healthy eating habits.</>The key to healthy eating is keeping the following 3 aspects in mind when selecting your eating options: </><ol><li>Type of food (protein, starch)</li><li>Quantity of those foods (recommended serving size)</li><li>Quality</li></ol>"><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b insider-bold"><div>Healthy eating goes hand-in-hand with your ability to successfully manage your diabetes.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>The two main focuses of healthy eating are portion control and the type of food you are eating.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Testing your blood sugar before and then 2 hours after a meal allows you to learn the effect of that meal on your blood sugar – This can help you make healthy food choices and learn how to plan meals.&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="The CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT USB meters have a <span class=\'insider-bold-n\'>paired testing feature</span> that allows you to mark your Before-meal and After-meal readings, plus reminds you when it’s time to test after a meal, with an audible reminder."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
						<li class="insider-bullet-b insider-bold"><div>Before and after meal marker features are helpful in providing pre/post meal analysis – plus include alarms to remind you to test.</div></li>\
						<li class="insider-bullet-b"><div>Carbohydrates are the body’s main source of energy and the American Diabetes Association recommends a minimum of 130g of carbohydrates per day.&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="The CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT USB meters have a <span class=\'insider-bold-n\'>carb-counting feature</span> that easily logs carbs."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
						<li class="insider-bullet-b"><div>One serving size of carbohydrates is about 15g, which would be a portion of cereal the size of a tennis ball, bread the size of a cassette tape, or a piece of cake the size of a dental floss container.</div></li>\
						<li class="insider-bullet-b"><div>Lean proteins (e.g. skinless chicken, fish, and egg whites) are a great source of daily nutrients and keep you feeling full, longer.</div></li>\
						<li class="insider-bullet-b"><div>Saturated fats can raise your cholesterol and put you at a higher risk for heart disease – try to limit your fat intake.&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="People with diabetes should eat a variety of foods each day. Carbs from vegetables, fruits, whole grains and dairy products instead of carbs with added sugar, fat and salt."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
					</ul>\
					<div class="insider-subtitle">Recommendations and Monitoring&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="Its important that your diabetes customer understand why their diabetes healthcare professional is recommending the testing regimen and what the numbers mean.</>What should the customer be looking for and when?"><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>Track you carb and food intake by logging your food.</div></li>\
						<li class="insider-bullet-b"><div>Regularly monitoring your blood sugar is one of the most important things you can do to help control your diabetes.</div></li>\
						<li class="insider-bullet-b"><div>Set your BG meter up to help you track your before and after meal results, and log your test results to compare with food intake for better insights to your diabetes.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Test before and after a meal (paired testing) so you know what the meal does to your blood sugar.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>\
							Some quick tips for healthy eating are:\
							<ul class="insider-ul-sub">\
								<li class="insider-bullet-s insider-bold"><div>Plan your meals and include all food groups</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Keep a food log and monitor carb in-take&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="There are food record log sheets, even phone apps, that can help you track your food intake quantity and quality."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div></li>\
								<li class="insider-bullet-s insider-bold"><div>Space your meals evenly and avoid skipping meals</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Avoid skipping meals – to avoid over-eating at your next meal</div></li>\
								<li class="insider-bullet-s insider-bold"><div>Snacks can help reduce your hunger while adding a nutritious energy boost to your day</div></li>\
								<li class="insider-bullet-s insider-bold"><div>If you eat out a lot, go to restaurants that make it easier for you to follow your meal plan and limit your portion size to one serving - Take the rest to-go.</div></li>\
							</ul>\
						</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Ask your doctor if s/he would recommend you seeing a dietitian.</div></li>\
					</ul>\
				</div>\
				<div class="insider-info-script insider-margin-top-big btn-smooth" ng-click="onInsiderPDF()">\
					<div class="insider-info-content">\
						<p>"Let’s chat in a few weeks and see what’s working and what’s not."</p>\
						<p><span class="insider-info-green"><span>SHARE</span> the Know Your Nutrition informational guide, designed to give your patient more insight and help them manage their diabetes.</span></p>\
					</div>\
					<div class="insider-info-footer">\
						<span class="insider-bold-g">Patient Support Material</span>\
						<span>Know Your<sup class="sup-tm">TM</sup> Nutrition Guide&nbsp<i class="ion-arrow-right-c"></i></span>\
					</div>\
				</div>\
				<div class="insider-padding-annotation row responsive-pr insider-row insider-margin-top-bhm" ng-show="showAnnotation()">\
					<div class="col-45">\
						<div class="insider-fig-03-01 insider-fig-big"></div>\
					</div>\
					<div class="col-3"></div>\
					<div class="col-52">\
						<div class="insider-text-annotation insider-bold-n no-margin">\
							<p>For an experienced tester, and someone looking for or needing more, the CONTOUR<sup>®</sup>NEXT meter is a very good choice. It offers ease-of-use and the proven accuracy you’ve come to expect from the CONTOUR<sup>®</sup>NEXT portfolio of meters.</p>\
							<p>Additionally, the CONTOUR<sup>®</sup>NEXT USB meter provides both meal-markers and audible reminders, to help your patients get actionable information. </p>\
						</div>\
					</div>\
				</div>\
				',
			hasNavButtons: false,
			hasFooter: true,
			hasScriptButtons: true,
			scriptSection: "Physical Activity",
			scriptName: "Talking Points - ReFill&nbsp<i class='ion-arrow-right-c'></i>",
			hasScriptButtonsA: false,
			scriptSectionA: "",
			scriptNameA: "",
			pdfIndex: 1
		},

		// 04: PA Talking Points - New Fill
		{
			title: "PA: Talking Points - New Fill",
			upperContent: '<div class="insider-padding">\
					<div class="insider-title">Physical Activity</div>\
					<div class="insider-tag"><span>NEW FILL</span> <span>(ORAL/INSULIN/TEST STRIPS)</span></div>\
					<div class="insider-text-annotation insider-margin-top-med" ng-show="showAnnotation()">\
						<p>Sometimes it only takes a question to start a useful <span class="insider-bold-g">DIALOGUE!</span></p>\
						<p>These are suggested questions to help you engage your diabetes customer to help start the dialogue. You can ask as few or as many questions as you would like. If you have limited time, you may want to just focus on the highlighted information.</p>\
						<p class="insider-italic">Patients can find a diabetes educator in their area through <span class="insider-link insider-link-blue" ng-click="onLink($event)">www.diabeteseducator.org</span></p>\
					</div>\
					<div class="insider-subtitle insider-margin-top-med">Engagement</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>Have you met with a diabetes educator?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>How would you rate your level of activity? (Low, Moderate, High)</div></li>\
						<li class="insider-bullet-b insider-bold"><div>What type of daily activity do you do consistently?</div></li>\
						<li class="insider-bullet-b"><div>Do you understand the importance of activity for patients with diabetes and activity?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>What questions or concerns do you have about your daily activity level and/or recommendation for daily activity?</div></li>\
						<li class="insider-bullet-b"><div>Do you have a tracker that can help you monitor your level of activity?</div></li>\
					</ul>\
					<div class="insider-subtitle">How Activity Affects Your Blood Glucose&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="It’s very important that the patient knows their exercise limitations. Remind your patient that they should check with their physician before starting any exercise program."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div><span style="font-weight: bold">There are many benefits to increasing your level of physical activity.</span> It can help improve glucose control for people with diabetes, reduce risk for cardiovascular disease, increase weight loss and lower Body Mass Index (BMI). </div></li>\
						<li class="insider-bullet-b insider-bold"><div>The American Diabetes Association recommends at least 90 minutes of moderate intensity exercise throughout the week.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Physical activity can be split between at least 3 days during the week and for at least  30 minutes each day.</div></li>\
						<li class="insider-bullet-b"><div>You do not have to do exercise every day, but you don’t want to go more than 2 days in a row without exercising.</div></li>\
						<li class="insider-bullet-b"><div>Examples of a moderate intensity exercise are a 30 minute brisk walk, bicycling for 30 minutes, water aerobics, or even gardening for 30-45 minutes. You can also mix in days of more vigorous activity if you feel like your body can handle it, such as a zumba class or step aerobics.</div></li>\
						<li class="insider-bullet-b"><div>The American Diabetes Association also recommends resistance training such as weight lifting at least 2 times per week.</div></li>\
					</ul>\
					<div class="insider-subtitle">Recommendations and Monitoring</div>\
					<div class="insider-sentence">Please <span style="font-weight: bold">check with your physician before starting an exercise program,</span> especially if you are doing little or no exercise currently.</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>The key is to start off by making small changes such as taking a walk after dinner instead of sitting or laying down.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>I encourage you to find the type of physical activity you enjoy doing because it will make it easier to integrate into your lifestyle.</div></li>\
						<li class="insider-bullet-b"><div>Regularly monitoring your blood sugar is one of the most important things you can do to help control your diabetes.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Testing your blood sugar can help you understand how exercise affects your blood sugar.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>If you test <span style="font-style: italic">before</span> and then <span style="font-style: italic">after</span> a brisk walk, for instance, you may see the effect that this level of exercise has on your blood sugar results.</div></li>\
					</ul>\
					&nbsp&nbsp&nbsp&nbsp<span class="insider-popover-annotation insider-margin-top-big" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="To help you provide useful information to the diabetes patient on an on-going basis, please refer to the Patient Materials section. "><span>HELPFUL TIP</span><i class="ion-heart"></i></span>\
				</div>\
				<div class="insider-info-script insider-margin-top-big btn-smooth" ng-click="onInsiderPDF()">\
					<div class="insider-info-content">\
						<p>"Let’s chat in a few weeks and see what’s working and what’s not."</p>\
						<p><span class="insider-info-green"><span>SHARE</span> the Know Your Healthy Steps informational guide which may help your patient understand how exercise can help them control their blood sugar.</span></p>\
					</div>\
					<div class="insider-info-footer">\
						<span class="insider-bold-g">Patient Support Material</span>\
						<span>Know Your<sup class="sup-tm">TM</sup> Healthy Steps Guide&nbsp<i class="ion-arrow-right-c"></i></span>\
					</div>\
				</div>\
				<div class="insider-padding-annotation row responsive-pr insider-row insider-margin-top-bhm" ng-show="showAnnotation()">\
					<div class="col-49">\
						<div class="insider-fig-04-01 insider-fig-big"></div>\
					</div>\
					<div class="col-3"></div>\
					<div class="col-45">\
						<div class="insider-text-annotation insider-bold-n no-margin">\
							<p>For a newly diagnosed diabetes patient, the CONTOUR<sup>®</sup>NEXT EZ meter is a very good choice because of its ease-of-use and high accuracy.</p>\
							<p>Additionally, the CONTOUR<sup>®</sup>NEXT EZ  meter provides both meal-markers and audible reminders, to help your patient get actionable information.</p>\
						</div>\
					</div>\
				</div>\
				',
			hasNavButtons: false,
			hasFooter: true,
			hasScriptButtons: false,
			scriptSection: "",
			scriptName: "",
			hasScriptButtonsA: true,
			scriptSectionA: "Physical Activity",
			scriptNameA: "Talking Points - ReFill&nbsp<i class='ion-arrow-right-c'></i>",
			pdfIndex: 2
		},

		// 05: PA Talking Points - Refill
		{
			title: "PA: Talking Points - Refill",
			upperContent: '<div class="insider-padding">\
					<div class="insider-title">Physical Activity</div>\
					<div class="insider-tag"><span>REFILL</span> <span>(ORAL/INSULIN/TEST STRIPS)</span></div>\
					<div class="insider-text-annotation insider-margin-top-med" ng-show="showAnnotation()">\
						<p>Sometimes it only takes a question to start a useful <span class="insider-bold-g">DIALOGUE!</span></p>\
						<p>These are suggested questions to help you engage your diabetes customer to help start the dialogue. You can ask as few or as many questions as you would like. If you have limited time, you may want to just focus on the highlighted information.</p>\
						<p class="insider-italic">Patients can find a diabetes educator in their area through <span class="insider-link insider-link-blue" ng-click="onLink($event)">www.diabeteseducator.org</span></p>\
					</div>\
					<div class="insider-subtitle insider-margin-top-med">Engagement</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b insider-bold"><div>How would you rate your current level of diabetes management? (Good, Average, Poor)</div></li>\
						<li class="insider-bullet-b insider-bold"><div>How would you rate your level of activity? (Low, Moderate, High)</div></li>\
						<li class="insider-bullet-b insider-bold"><div>What type of daily activity do you do consistently?</div></li>\
						<li class="insider-bullet-b"><div>Do you have a tracker that can help you monitor your level of activity?</div></li>\
						<li class="insider-bullet-b"><div>Do you understand the connection between diabetes and activity?</div></li>\
						<li class="insider-bullet-b insider-bold"><div>What questions or concerns do you have about your daily activity level and/or recommendation for daily activity?</div></li>\
					</ul>\
					<div class="insider-subtitle">How Activity Affects Your Blood Glucose&nbsp&nbsp<span class="insider-popover-annotation" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="It’s very important that the patient knows their exercise limitations. Remind your patient that they should check with their physician before starting any exercise program."><span>HELPFUL TIP</span><i class="ion-heart"></i></span></div>\
					<div class="insider-sentence">(Change in medication? I understand your frustration.)</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>There are lifestyle modifications you can make that will help your body control the blood sugar and the need for adding other medications may be prolonged.</div></li>\
						<li class="insider-bullet-b"><div>The first is by eating a healthy diet, which I am sure your doctor has talked to you about.</div></li>\
						<li class="insider-bullet-b"><div>Has your doctor explained how <span style="font-weight: bold">physical activity</span> can help control your diabetes?</div></li>\
						<li class="insider-bullet-b"><div>The American Diabetes Association recommends at least 90 minutes of moderate intensity  exercise throughout the week.</div></li>\
						<li class="insider-bullet-b"><div>You can split it between 3 or more days as long as you are physically active for at least 30 minutes each time. You don’t have to engage in such activity every day, but it is best to not go more than 2 days without activity. A good rule is to try to have some activity at least every other day.</div></li>\
						<li class="insider-bullet-b"><div>Some examples of moderate physical activity are taking a brisk walk, bicycling, water aerobics, and even gardening or vacuuming.</div></li>\
						<li class="insider-bullet-b"><div>Some examples of more vigorous activity would be taking a zumba class or step aerobics, which can be mixed in throughout the week if you want.</div></li>\
						<li class="insider-bullet-b"><div>Exercise is very beneficial to help improve your glucose control and it can also reduce your risk for cardiovascular disease.</div></li>\
					</ul>\
					<div class="insider-subtitle">Recommendations and Monitoring</div>\
					<div class="insider-sentence">Please <span style="font-weight: bold">check with your physician before starting an exercise program,</span> especially if you are doing little or no exercise currently.</div>\
					<ul class="insider-ul">\
						<li class="insider-bullet-b"><div>The key is to start off by making small changes such as taking a walk after dinner instead of laying or sitting down.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>I encourage you to find the type of physical activity you enjoy doing because it will make it easier to integrate into your lifestyle.</div></li>\
						<li class="insider-bullet-b"><div>Regularly monitoring your blood sugar is one of the most important things you can do to help control your diabetes.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>Testing your blood sugar can help you understand how exercise affects your blood sugar.</div></li>\
						<li class="insider-bullet-b insider-bold"><div>If you test <span style="font-style: italic">before</span> and then <span style="font-style: italic">after</span> a brisk walk, for instance, you may see the effect that this level of exercise has on your blood sugar results.</div></li>\
					</ul>\
					&nbsp&nbsp&nbsp&nbsp<span class="insider-popover-annotation insider-margin-top-big" ng-show="showAnnotation()" ng-click="onPopover($event)" number="" content="To help you provide useful information to the diabetes patient on an on-going basis, please refer to the Patient Materials section."><span>HELPFUL TIP</span><i class="ion-heart"></i></span>\
				</div>\
				<div class="insider-info-script insider-margin-top-big btn-smooth" ng-click="onInsiderPDF()">\
					<div class="insider-info-content">\
						<p>"Let’s chat in a few weeks and see what’s working and what’s not."</p>\
						<p><span class="insider-info-green"><span>SHARE</span> the Know Your Healthy Steps informational guide which may help your patient understand how exercise can help them control their blood sugar.</span></p>\
					</div>\
					<div class="insider-info-footer">\
						<span class="insider-bold-g">Patient Support Material</span>\
						<span>Know Your<sup class="sup-tm">TM</sup> Healthy Steps Guide&nbsp<i class="ion-arrow-right-c"></i></span>\
					</div>\
				</div>\
				<div class="insider-padding-annotation row responsive-pr insider-row insider-margin-top-bhm" ng-show="showAnnotation()">\
					<div class="col-45">\
						<div class="insider-fig-05-01 insider-fig-big"></div>\
					</div>\
					<div class="col-3"></div>\
					<div class="col-52">\
						<div class="insider-text-annotation insider-bold-n no-margin">\
							<p>The CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT USB meters have an AUTOLOG feature that automatically prompts the patient to mark their BG result. Patients can add a note to their BG result – such as before or after exercise.</p>\
							<p>Additionally, patients can set an audible reminder to remind them to test afterwards.</p>\
							<p>Only the CONTOUR<sup>®</sup>NEXT portfolio of meters offer both meal-markers and audible reminders.</p>\
						</div>\
					</div>\
				</div>\
				',
			hasNavButtons: false,
			hasFooter: true,
			hasScriptButtons: false,
			scriptSection: "",
			scriptName: "",
			hasScriptButtonsA: false,
			scriptSectionA: "",
			scriptNameA: "",
			pdfIndex: 2
		},

		// 06: BGM Overview
		{
			title: "BGM: Overview",
			upperContent: '\
				<div class="insider-padding">\
					<div class="insider-title">Blood Glucose Monitoring</div>\
					<div class="insider-small-title">Overview</div>\
					<div class="row responsive-pr insider-row insider-margin-top-med">\
						<div class="col-60">\
							<div class="insider-notice">Ongoing patient self-management education and support are critical to preventing acute complications and reducing the risk of long-term complications in Patients With Diabetes (PWD).<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Miller, KM, Beck, RW, Bergenstal, RM, et al. Evidence of a Strong Association Between Frequency of Self-Monitoring of Blood Glucose and Hemoglobin A1C Levels in T1D Exchange Clinic Registry Participants. Diabetes Care. 2013;36(7):2009-2014. doi:10.2337/dc12-1770.">1</sup></div>\
						</div>\
						<div class="col-40">\
							<div class="insider-fig-06-01 insider-fig-med"></div>\
						</div>\
					</div>\
					<div class="insider-text insider-margin-top-med">\
						<p>The American Diabetes Association (ADA) Standards of Medical Care are intended to provide clinicians, patients, and other interested individuals with the components of diabetes care, general treatment goals, and tools to evaluate the quality of care.</p>\
						<p>The Assessment of Glycemic Control section of the ADA Standards of Care describes two primary techniques that are available for health providers and patients to assess the effectiveness of the management plan on glycemic control: patient self-monitoring of blood glucose (SMBG), and A1C. Continuous Glucose Monitoring (CGM) devices are also an option for patients, but these devices are still not approved by the US Food and Drug Administration as the sole agent to monitor glucose.</p>\
						<p>The Standards of Medical Care states that “SMBG allows patients to evaluate their individual response to therapy and assess whether glycemic targets are being achieved. Results of SMBG can be useful in preventing hypoglycemia and adjusting medications (particularly prandial insulin doses), medical nutrition therapy, and physical activity. Evidence also supports a correlation between SMBG frequency and lower A1C.”</p>\
						<p>Furthermore, it states that “SMBG frequency and timing should be dictated by the patient’s specific needs and goals. SMBG is especially important for patients treated with insulin to monitor for and prevent asymptomatic hypoglycemia and hyperglycemia.”<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="American Diabetes Association. Standards of Medical Care in Diabetes – 2015. Diabetes Care. 2015; 38 (1) 1 – 99.">2</sup></p>\
					</div>\
				</div>',
			slideContent: {
				title: 'Other Monitoring<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="American Diabetes Association. Standards of Medical Care in Diabetes – 2015. Diabetes Care. 2015; 38 (1) 1 – 99.">3</sup>',
				slides: [
					'<div class="row responsive-pr insider-row">\
						<div class="col-50">\
							<div class="insider-slide-block">In addition to blood glucose, many other things can be monitored to give clinicians tools to better assess diabetes control including:</div>\
						</div>\
						<div class="col-50">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o insider-li-big"><div>A1C</div></li>\
								<li class="insider-bullet-t"><div>establishes average blood glucose levels within the last 3 months</div></li>\
								<li class="insider-bullet-o insider-li-big"><div>Ketones</div></li>\
								<li class="insider-bullet-t"><div>allows monitoring for life threatening complications (Diabetic Ketoacidosis)</div></li>\
							</ul>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row">\
						<div class="col-50">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o insider-li-big"><div>Blood Pressure</div></li>\
								<li class="insider-bullet-t"><div>lipid panels and CVD (Cardio Vascular Disease) screening – monitors for complications of DM and comorbidities</div></li>\
							</ul>\
						</div>\
						<div class="col-50">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o insider-li-big"><div>Albumin</div></li>\
								<li class="insider-bullet-t"><div>allows monitoring for DM related kidney damage</div></li>\
							</ul>\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 07: BGM Importance of Monitoring
		{
			title: "BGM: Importance of Monitoring",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Blood Glucose Monitoring</div>\
						<div class="insider-small-title">Importance of Monitoring</div>\
						<div class="insider-notice insider-margin-top-small">Monitoring of blood glucose is one of the key things to assessing patients’ diabetes control.</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>\
								Monitoring allows both the patient and their healthcare professional to assess:\
								<ul class="insider-ul-sub">\
									<li class="insider-bullet-s"><div>If medications are working well or need to be adjusted</div></li>\
									<li class="insider-bullet-s"><div>If patients are following the correct dietary plan</div></li>\
									<li class="insider-bullet-s"><div>If patients are adhering to medications</div></li>\
								</ul>\
							</div></li>\
							<li class="insider-bullet-b"><div>Blood glucose monitoring is also important for patients to assess when to self-adjust insulin regimens (when allowed by physician plan), when to treat hypoglycemia and when to seek medical attention</div></li>\
							<li class="insider-bullet-b"><div>Monitoring also allows the patient to see in real time how improving nutrition, medication adherence and exercise will improve blood glucose (BG)<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="American Diabetes Association. Standards of Medical Care in Diabetes – 2015. Diabetes Care. 2015; 38 (1) 1 – 99.">1</sup></div></li>\
						</ul>\
					</div>\
					<div class="insider-fig-big insider-fig-07-01 insider-margin-top-med"></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 08: BGM Current Guidelines on Timing
		{
			title: "BGM: Current Guidelines on Timing",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Blood Glucose Monitoring</div>\
						<div class="insider-small-title">Current Guidelines on Timing</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>In 2015 the American Diabetes Association (ADA) released new guidelines for the treatment of DM.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="American Diabetes Association. Standards of Medical Care in Diabetes – 2015. Diabetes Care. 2015; 38 (1) 1 – 99.">1</sup></div></li>\
							<li class="insider-bullet-b"><div>In 2011 the American Association of Clinical Endocrinologists (AACE) released the Medical Guidelines for Clinical Practice for Developing a Diabetes Mellitus Comprehensive Care Plan, which was updated with a simplified treatment algorithm in 2013.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Handelsman, Y, Mechanick, JI, Blonde, L, et al. American Association of Clinical Endocrinologists Medical Guidelines for Clinical Practice for Developing a Diabetes Mellitus Comprehensive Care Plan. Endocrine Practice. 2011;17(s2):1-53. doi:10.4158/EP.17.S2.1.">2</sup></div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-small">ADA recommendations:</div>\
						<div class="insider-sentence">Recommended blood glucose testing timing for all patients using multiple-dose insulin and beneficial for all other patients</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Before meals or snacks</div></li>\
							<li class="insider-bullet-b"><div>“Occasionally postprandially”</div></li>\
							<li class="insider-bullet-b"><div>At bedtime</div></li>\
							<li class="insider-bullet-b"><div>Before exercise</div></li>\
							<li class="insider-bullet-b"><div>When experiencing hypoglycemia symptoms or when treating hypoglycemia</div></li>\
							<li class="insider-bullet-b"><div>Before “critical tasks” (e.g. driving, exercising, etc.)<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="American Diabetes Association. Standards of Medical Care in Diabetes – 2015. Diabetes Care. 2015; 38 (1) 1 – 99.">3</sup></div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-small">AACE recommendations:</div>\
						<div class="insider-sentence">Recommended blood glucose testing timing for all patients using insulin, and for non-insulin DM patients.</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>At least two times a day but preferably anytime before insulin administration</div></li>\
							<li class="insider-bullet-b"><div>Patients with symptoms, history of lack of BG control or frequent low blood glucose may need monitoring after meals or during the night<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content="Handelsman, Y, Mechanick, JI, Blonde, L, et al. American Association of Clinical Endocrinologists Medical Guidelines for Clinical Practice for Developing a Diabetes Mellitus Comprehensive Care Plan. Endocrine Practice. 2011;17(s2):1-53. doi:10.4158/EP.17.S2.1.">4</sup></div></li>\
						</ul>\
					</div>',
			slideContent: {
				title: 'Other Monitoring',
				slides: [
					'<div class="row responsive-pr insider-row insider-hoz-padding-med">\
						<div class="col-60">\
							<div class="insider-slide-block insider-margin-top-small">Each year, the American Diabetes Association (ADA) releases new diabetes treatment guidelines, the American Diabetes Association Standards of Medical Care.</div>\
						</div>\
						<div class="col-40">\
							<div class="insider-fig-med insider-fig-08-01"></div>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>World Diabetes Day is celebrated on November 14th to mark the birthday of Frederick Banting who, along with Charles Best, was instrumental in the discovery of insulin in 1922, a life-saving treatment for diabetes patients.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="5" content="10 facts about diabetes. WHO. 2014. Available at: http://www.who.int/features/factfiles/diabetes/en/. Accessed January 21, 2015.">5</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 09: BGM Patient Goals
		{
			title: "BGM: Blood Glucose Patient Goals",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Blood Glucose Monitoring</div>\
						<div class="insider-small-title">Blood Glucose Patient Goals:</div>\
						<div class="insider-notice insider-margin-top-small">Glycemic Index Recommendations for Adults (Non-Pregnant)<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="American Diabetes Association. Standards of Medical Care in Diabetes – 2015. Diabetes Care. 2015; 38 (1) 1 – 99.">1</sup></div>\
					</div>\
					<div class="insider-table insider-margin-top-big">\
						<div class="row insider-table-row">\
							<div class="col-50 insider-cell-text">\
								<div>A1C</div>\
							</div>\
							<div class="col-50 insider-cell-text">\
								<div><7.0%</div>\
							</div>\
						</div>\
						<div class="row insider-table-row">\
							<div class="col-50 insider-cell-text">\
								<div>Preprandial capillary plasma glucose</div>\
							</div>\
							<div class="col-50 insider-cell-text">\
								<div>80–130 mg/dL (3.9–7.2 mmol/L)</div>\
							</div>\
						</div>\
						<div class="row insider-table-row">\
							<div class="col-50 insider-cell-text">\
								<div>Peak postprandial capillary plasma glucose</div>\
							</div>\
							<div class="col-50 insider-cell-text">\
								<div><180 mg/dL (<10.0 mmol/L)</div>\
							</div>\
						</div>\
					</div>\
					<div class="insider-hoz-padding">\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>Glycemic goals in pediatrics are generally less strict due to potential for hypoglycemic unawareness and growth needs.</div></li>\
							<li class="insider-bullet-b"><div>In patients without severe hypoglycemia, tighter goals may be considered.</div></li>\
							<li class="insider-bullet-b"><div>Continuous glucose monitoring (CGM) combined with a structured intensive insulin regimen can lower A1C in adults (greater than age 25) with type 1 diabetes.</div></li>\
							<li class="insider-bullet-b"><div>Lowering of A1C through CGM and an insulin therapy may also be helpful with children, teens and younger adults.</div></li>\
							<li class="insider-bullet-b"><div>CGM can also be used as a supplemental tool with self monitoring blood glucose, especially for patients with hypoglycemic unawareness and/or frequent hypoglycemic episodes.</div></li>\
						</ul>\
					</div>\
					<div class="insider-fig-huge insider-fig-09-01 insider-margin-top-huge"></div>\
					<div class="insider-fig-caption insider-margin-top-med">CONTOUR<sup>®</sup>NEXT Blood Glucose Meter</div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 10: BGM Paired Testing
		{
			title: "BGM: Paired Testing",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Blood Glucose Monitoring</div>\
						<div class="insider-small-title">Paired Testing<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="GfK. 2103 US Roper Diabetes Patient Study.">1</sup></div>\
						<div class="insider-text insider-margin-top-med">\
							<p>Market research suggests that over 19 MM people with diabetes check their blood glucose (Roper 2013). While the number of testers has increased, the frequency of testing has declined. Along with other reasons for the decline, many patients with diabetes don’t understand their numbers or don’t know what to do with the BG results they get.</p>\
							<p>Some people see their blood glucose numbers as moving up and down for no reason, while others think of their numbers as a grade on a test or a judgment of how well they have done with their meal plan and exercise routine. It’s easy for people with diabetes to skip testing when they don’t understand or want to know the results.</p>\
							<p>Paired Testing is a relatively new approach to BG testing. Paired Testing means patients test their blood glucose level twice—before and again after a meal or activity––and compare the numbers. When they compare the pair of numbers, they can see how their decisions or actions affect their blood glucose level, and can see what they can do to improve. Paired Testing can help them make informed and wise decisions, which, in turn, may help them feel more confident and in charge of their diabetes.</p>\
						</div>\
						<div class="insider-subtitle insider-margin-top-med">The paired testing approach can help answer important questions, such as:</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Why their blood glucose level may be going up and down</div></li>\
							<li class="insider-bullet-b"><div>How their moods may be related to blood glucose level</div></li>\
							<li class="insider-bullet-b"><div>Whether or not their actions are making a real difference in their diabetes care</div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-small">Having your patients try Paired Testing can help them assess other important issues as well, such as:</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>How stress affects their blood glucose level</div></li>\
							<li class="insider-bullet-b"><div>How their favorite drinks impact their blood glucose level</div></li>\
							<li class="insider-bullet-b"><div>Why their blood glucose level sometimes seem too high in the morning</div></li>\
							<li class="insider-bullet-b"><div>Whether changes in their blood glucose level affect their sleep</div></li>\
						</ul>\
					</div>',
			slideContent: {
				title: 'Blood Glucose Paired Testing',
				slides: [
					'<div class="row responsive-pr insider-row insider-hoz-padding-med">\
						<div class="col-33">\
							<div class="insider-fig-med insider-fig-10-01"></div>\
						</div>\
						<div class="col-33">\
							<div class="insider-fig-med insider-fig-10-02"></div>\
						</div>\
						<div class="col-33">\
							<div class="insider-fig-med insider-fig-10-03"></div>\
						</div>\
					</div>'
				]
			},
			lowerContent: "\
					<div class='insider-info insider-margin-top-huge'>\
						<div class='insider-dyk'></div>\
						<div class='insider-dyk-placeholder'></div>\
						A meter with a meal marker and audible reminder increases post-prandial and paired testing.\
						<div class='insider-margin-top-small'>Using a meal marker resulted in:</div>\
						<ul class='insider-ul-ellipsis insider-margin-top-small'>\
							<li class='insider-bullet-b'><div>Increased understanding of how to make decisions</div></li>\
							<li class='insider-bullet-b'><div>Better understanding of the difference between pre-meal and post-meal results<sup ng-click='onPopover($event)' class='insider-popover-tag' number='2' content='\"Adrenal Disorders\". American Association of Clinical Endorcrinologists (2011): 1-211. Web. 22 Jan. 2015.'>2</sup></div></li>\
						</ul>\
					</div>",
			hasNavButtons: true,
			hasFooter: false
		},

		// 11: HE Overview
		{
			title: "HE: Overview",
			upperContent: '\
				<div class="insider-padding">\
					<div class="insider-title">Healthy Eating</div>\
					<div class="insider-small-title">Overview</div>\
					<div class="insider-notice insider-margin-top-small">One of the most important tools for controlling diabetes progression is the achievement and maintenance of healthy eating habits.</div>\
					<div class="row responsive-pr insider-row insider-margin-top-med">\
						<div class="col-55">\
							<div class="insider-sentence">The goals of nutrition therapy in diabetes are to promote and support healthful eating patterns, emphasizing a variety of nutrition dense foods in appropriate portion sizes to improve overall health, and specifically to:</div>\
							<ul class="insider-ul insider-margin-top-small">\
								<li class="insider-bullet-b"><div>Attain individualized glycemic, blood pressure and lipid goals</div></li>\
								<li class="insider-bullet-b"><div>Achieve and maintain body weight goals</div></li>\
								<li class="insider-bullet-b"><div>Delay or prevent complications of diabetes</div></li>\
							</ul>\
						</div>\
						<div class="col-45">\
							<div class="insider-fig-11-01 insider-fig-big insider-margin-top-small"></div>\
						</div>\
					</div>\
					<div class="insider-text insider-margin-top-tiny">\
						<p>A healthy diet will lead to an immediate positive effect on patients’ blood glucose levels. Over time this will also improve patients’ weights and minimize long term complications like kidney damage and retinopathy.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Evert, AB, Boucher, JL, Cypress, M, et al. Nutrition Therapy Recommendations for the Management of Adults With Diabetes.Diabetes Care.<br>2013;36(11):3821-3842.doi:10.2337/dc13-2042.">1</sup></p>\
					</div>\
				</div>',
			slideContent: {
				title: 'ADA Goals for Diabetes Nutrition',
				slides: [
					'<div class="row responsive-pr insider-row">\
						<div class="col-49">\
							<ol class="insider-ol">\
								<li>Achieve and maintain:\
									<ul class="insider-slide-ul insider-margin-top-small">\
										<li class="insider-bullet-o"><div>Blood glucose levels in the normal range or as close to normal as is safely possible</div></li>\
										<li class="insider-bullet-o"><div>A lipid and lipoprotein profile that reduces the risk for vascular disease</div></li>\
										<li class="insider-bullet-o"><div>Blood pressure levels in the normal range or as close to normal as is safely possible</div></li>\
									</ul>\
								</li>\
							</ol>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<ol class="insider-ol" start="2">\
								<li>Prevent, or at least slow, the rate of development of the chronic complications of diabetes by modifying nutrient intake and lifestyle</li>\
							</ol>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row">\
						<div class="col-49">\
							<div class="insider-protect-margin">\
								<ol class="insider-ol insider-margin-top-big" start="3">\
									<li>Address individual nutrition needs, taking into account personal and cultural preferences and willingness to change</li>\
								</ol>\
							</div>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<div class="insider-protect-margin">\
								<ol class="insider-ol insider-margin-top-big" start="4">\
									<li>Maintain the pleasure of eating by only limiting food choices when indicated by scientific evidence</li>\
								</ol>\
							</div>\
						</div>\
					</div>'
				]
			},
			lowerContent: "\
					<div class='insider-info insider-margin-top-huge'>\
						<div class='insider-dyk'></div>\
						<div class='insider-dyk-placeholder'></div>\
						There is an emerging global epidemic of diabetes that can be traced back to rapid increases in obesity and physical inactivity. <sup ng-click='onPopover($event)' class='insider-popover-tag' number='2' content='10 facts about diabetes. WHO. 2014. Available at: http://www.who.int/features/factfiles/diabetes/en/. Accessed January 21, 2015.'>2</sup>\
					</div>",
			hasNavButtons: true,
			hasFooter: false
		},

		// 12: HE Carbohydrates
		{
			title: "HE: Carbohydrates",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Carbohydrates</div>\
						<div class="insider-notice insider-margin-top-small">The body uses carbohydrates as its main fuel source. Carbohydrates are digested and then absorbed into your blood stream, where they are known as blood sugar or blood glucose. The glucose enters the body\'s cells with the help of insulin. Extra glucose is stored in the liver, muscles and other cells for later use or if unused, it is converted to fat.</div>\
						<div class="insider-subtitle insider-margin-top-small">Managing Carbohydrate Intake</div>\
						<div class="insider-text insider-margin-top-small">\
							<p>Regulating the amounts of carbohydrate and available insulin is the key strategy for glycemic control. Patients should count carbohydrates and adjust insulin accordingly.</p>\
							<p>A balanced diet should consist of healthy carbohydrates such as:<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Evert, AB, Boucher, JL, Cypress, M, et al. Nutrition Therapy Recommendations for the Management of Adults With Diabetes.Diabetes Care. 2013;36(11):3821-3842.">1</sup></p>\
						</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Fiber-rich fruits and vegetables</div></li>\
							<li class="insider-bullet-b"><div>Whole grains</div></li>\
							<li class="insider-bullet-b"><div>Low-fat dairy products</div></li>\
							<li class="insider-bullet-b"><div>Beans and legumes</div></li>\
						</ul>\
						<div class="insider-text insider-margin-top-small">Products containing added sugars should be avoided.</div>\
						<div class="insider-subtitle insider-margin-top-med">Carbohydrate Counting</div>\
						<div class="insider-text insider-margin-top-small">\
							<p>Monitoring carb intake by carb counting is a key strategy in achieving blood sugar control.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Evert AB, Boucher JL, Cypress M, et al; for American Diabetes Association. Nutrition therapy recommendations for the management of adults with diabetes. Diabetes Care. 2013;36(11):3821-3842.">2</sup>Since carbs raise blood sugar, you may be asked to count them. Examples of carbohydrates are beans, grains, starchy vegetables, fruit, dairy products, sweets, and snacks</p>\
							<p>Should you avoid carbohydrates? Absolutely not! Carbohydrates are your body’s main source of fuel. By counting your carbs, you can make decisions that can help you control your weight and your blood sugar.</p>\
							<p>Consult with your HCP about limiting the carbs you eat each day.</p>\
						</div>\
					</div>',
			slideContent: {
				title: 'Examples of Carbohydrates<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="Clinical Diabetes. Carbohydrate Counting: The Basics. 23(3):123-124.">3</sup>',
				slides: [
					'<div class="row responsive-pr insider-row insider-long-row insider-big-margin-row">\
						<div class="col-45">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> CEREAL<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span> TENNIS BALL<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 15g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-01 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-50">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> BREAD<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span> CASSSETTE TAPE<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 15g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-02 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="row responsive-pr insider-row insider-long-row insider-big-margin-row">\
						<div class="col-45">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> PASTA & RICE<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span> LIGHT BULB<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 23g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-03 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-50">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> WHITE POTATO<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span> COMPUTER MOUSE<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 15g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-04 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-long-row insider-big-margin-row">\
						<div class="col-45">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> FRUIT<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span> BASEBALL OR WOMAN\'S FIST<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 20g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-05 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-50">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> DESSERTS & SWEETS<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span><br>\
											<span style="font-weight: bold">CAKE:</span> DECK OF CARDS<br>\
											<span style="font-weight: bold">BROWNIE</span> DENTAL FLOSS PACKAGE<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 20g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-06 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
					<div class="row responsive-pr insider-row insider-long-row insider-big-margin-row">\
						<div class="col-50">\
							<div>\
								<div class="row insider-row">\
									<div class="col-80">\
										<div class="insider-text-small">\
											<span style="font-weight: bold">TYPE:</span> SODA & JUCIES<br>\
											<span style="font-weight: bold">1 SERVING SIZE:</span> 1/2 CAN OF SODA<br>\
											<span style="font-weight: bold">APPROX. # OF CARBS:</span> 14g\
										</div>\
									</div>\
									<div class="col-20">\
										<div class="insider-fig-12-07 insider-fig-small insider-margin-top-tiny"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="col-50">\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 13: HE Fats
		{
			title: "HE: Fats",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Fats</div>\
						<div class="insider-notice insider-margin-top-small"><p>Fat in food is broken down into fatty acids that travel through the bloodstream for the cells to use. Excess fatty acids are packaged for storage in fat cells as triglycerides.</p></p>Saturated fats and trans fats (e.g. butter, lard, chocolate, poultry skin, palm oil, margarine, shortenings) raise the body’s cholesterol levels.</p></div>\
						<ul class="insider-ul insider-margin-top-big">\
							<li class="insider-bullet-b"><div>High cholesterol is a risk factor for heart disease.</div></li>\
							<li class="insider-bullet-b"><div>Patients with diabetes are at an increased risk of cardiovascular disease and many already have the comorbidity of dyslipidemia.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Evert, AB, Boucher, JL, Cypress, M, et al. Nutrition Therapy Recommendations for the Management of Adults With Diabetes. Diabetes Care. 2013;36(11):3821-3842. doi:10.2337/dc13-2042.">1</sup></div></li>\
						</ul>\
						<div class="insider-sentence insider-margin-top-small">A decrease in the amount of saturated fat, and the replacement of saturated fat with healthy, unsaturated fats will reduce the risk of cardiac complications in these patients.</div>\
						<ul class="insider-ul insider-margin-top-small">\
							<li class="insider-bullet-b"><div>Monounsaturated fats and polyunsaturated fats (e.g. avocado, canola, nuts, olive oil, peanut butter) are preferred </div></li>\
							<li class="insider-bullet-b"><div>EPA and DHA (fatty fish) and n-3 linolenic acid (ALA) are recommended for prevention of heart disease<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Franz, MJ. Protein Controversies in Diabetes. Protein Controversies in Diabetes. Available at: http://journal.diabetes.org/diabetesspectrum/00v13n3/pg132.htm Accessed January 21, 2015.">2</sup></div></div></li>\
						</ul>\
					</div>',
			hasNavButtons: true,
			hasFotter: false
		},

		// 14: HE How to Read a Food Label
		{
			title: "HE: How to Read a Food Label",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">How To Read A Food Label<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Use the Nutrition Facts Label. How to Use the Nutrition Fact Label, Eat Right, NHLBI, NIH. 2013. Available at: http://www.nhlbi.nih.gov/health/educational/wecan/eat-right/nutrition-facts.htm. Accessed January 21, 2015.">1</sup></div>\
						<div class="insider-notice insider-margin-top-small">When reading the nutrition facts on a food label, patients with diabetes should:</div>\
						<ul class="insider-ul insider-margin-top-small">\
							<li class="insider-bullet-b"><div> Start at the top with the serving size.</div></li>\
							<li class="insider-bullet-b"><div>The most important item on the label is the amount of “Total Carbohydrates”.</div></li>\
							<li class="insider-bullet-b"><div>Try to avoid foods with a high amount of saturated fat, trans fat, cholesterol, and sodium.</div></li>\
							<li class="insider-bullet-b"><div>Foods with a high amount of potassium, dietary fiber, vitamins A and C, calcium and iron are good.</div></li>\
							<li class="insider-bullet-b"><div>Daily Value (DV): Based on a 2,000 calories/day, 20% or more is high.</div></li>\
						</ul>\
					</div>\
					<div class="insider-fixed-fl insider-margin-top-big">\
						<div class="insider-absolute-fl">\
							<div class="insider-fl-title-1">Trail Mix</div>\
							<div class="insider-fl-title-2">Nutrition Facts</div>\
							<div class="insider-fl-title-3" style="padding: 0px .2em; border-bottom: .9em solid; padding-bottom: .6em; line-height: 1.3em;"><span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Serving Size" content="Pay attention to the serving size.">Serving Size</span> 1 oz (28g/About 6 pieces)<br>Servings Per Container About<span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Servings Per Container" content="This bag of trail mix contains 5 individual servings (1 oz per serving) that are 140 calories each.">&nbsp5&nbsp</span></div>\
							<div class="insider-fl-title-4" style="font-weight: bold;   line-height: 2em;">Amount Per Serving</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span style="font-weight: bold">Calories</span> 140</span>\
								<span class="insider-fl-title-3" style="float: right;"><span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Calories from Fat" content="No more than 30% of total calories should come from fat in a daily diet. For example, no more than 600 calories for a 2000-calorie diet.">Calories from Fat 80</span></span>\
							</div>\
							<div class="insider-fl-border-bold" style="line-height: 1.8em;">\
								<div class="insider-fl-title-4" style="font-weight: bold; text-align: right;">% Daily Value*</div>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span style="font-weight: bold">Total Fat</span> 9g</span>\
								<span class="insider-fl-title-3" style="float: right; font-weight: bold">14%</span>\
							</div>\
							<div class="insider-fl-border-thin" style="margin-left: 1.8em; line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Saturated Fat" content="Patients with diabetes should avoid saturated and trans fats. “Monounsaturated” and  “polyunsaturated” fats are better.">Saturated Fat 1.5g</span></span>\
								<span class="insider-fl-title-3" style="float: right; font-weight: bold">6%</span>\
							</div>\
							<div class="insider-fl-border-thin" style="margin-left: 1.8em; line-height: 1.8em;">\
								<span class="insider-fl-title-3">Trans Fat 0g</span>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span style="font-weight: bold"><span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Cholesterol" content="Patients should talk to their HCP about the amount of cholesterol to have per day.">Cholesterol</span></span> 0mg</span>\
								<span class="insider-fl-title-3" style="float: right; font-weight: bold">0%</span>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span style="font-weight: bold">Sodium</span> 95mg</span>\
								<span class="insider-fl-title-3" style="float: right; font-weight: bold">4%</span>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span style="font-weight: bold"><span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Total Carbohydrate" content="Every 15 Grams<br>Total Carbohydrate = 1 Carbohydrate Serving">Total Carbohydrate</span></span> 12g</span>\
								<span class="insider-fl-title-3" style="float: right; font-weight: bold">4%</span>\
							</div>\
							<div class="insider-fl-border-thin" style="margin-left: 1.8em; line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span ng-click="onFootnote($event)" class="insider-footnote-tag" title="Dietary Fiber" content="Patient should talk to HCP about the total amount of dietary fiber per day based on the number of calories consumed each day.">Dietary Fiber 1g</span></span>\
								<span class="insider-fl-title-3" style="float: right; font-weight: bold">6%</span>\
							</div>\
							<div class="insider-fl-border-thin" style="margin-left: 1.8em; line-height: 1.8em;">\
								<span class="insider-fl-title-3">Sugars 7g</span>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<span class="insider-fl-title-3"><span style="font-weight: bold">Protein</span> 3g</span>\
							</div>\
							<div class="insider-fl-border-thick" style="line-height: 1.8em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40"><span class="insider-fl-title-3">Vitamin A 0%</span></div>\
									<div class="col-20"><div class="insider-fl-title-3" style="text-align: center; font-size: 2.5em;">•</div></div>\
									<div class="col-40"><span class="insider-fl-title-3" style="float: right;">Vitamin C 0%</span></div>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.8em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40"><span class="insider-fl-title-3">Calcium 2%</span></div>\
									<div class="col-20"><div class="insider-fl-title-3" style="text-align: center; font-size: 2.5em;">•</div></div>\
									<div class="col-40"><span class="insider-fl-title-3" style="float: right;">Iron 6%</span></div></div>\
								</div>\
							</div>\
							<div class="insider-fl-border-thin">\
								<div class="insider-fl-title-4" style="padding-top: .2em;">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</div>\
								<div class="row" style="padding: 0px; padding-top: .1em;">\
									<div class="col-40"></div>\
									<div class="col-25"><span class="insider-fl-title-4">Calories</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">2,000</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">2,500</span></div>\
								</div>\
							</div>\
							<div class="insider-fl-border-thin" style="line-height: 1.2em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40">Total Fat</div>\
									<div class="col-25"><span class="insider-fl-title-4">Less than</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">65g</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">80g</span></div>\
								</div>\
							</div>\
							<div style="line-height: 1em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40">&nbsp&nbspSaturated Fat</div>\
									<div class="col-25"><span class="insider-fl-title-4">Less than</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">20g</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">25g</span></div>\
								</div>\
							</div>\
							<div style="line-height: 1em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40">Cholesterol</div>\
									<div class="col-25"><span class="insider-fl-title-4">Less than</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">300mg</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">300mg</span></div>\
								</div>\
							</div>\
							<div style="line-height: 1em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40">Sodium</div>\
									<div class="col-25"><span class="insider-fl-title-4">Less than</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">2,400mg</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">2,400mg</span></div>\
								</div>\
							</div>\
							<div style="line-height: 1em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40">Total Carbohydrate</div>\
									<div class="col-25"><span class="insider-fl-title-4"></span></div>\
									<div class="col-17"><span class="insider-fl-title-4">300g</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">375g</span></div>\
								</div>\
							</div>\
							<div style="line-height: 1em;">\
								<div class="row" style="padding: 0px;">\
									<div class="col-40">&nbsp&nbspDietary Fiber</div>\
									<div class="col-25"><span class="insider-fl-title-4"></span></div>\
									<div class="col-17"><span class="insider-fl-title-4">25g</span></div>\
									<div class="col-17"><span class="insider-fl-title-4">30g</span></div>\
								</div>\
							</div>\
							<div class="insider-fl-border-thin">\
								<div class="insider-fl-title-4" style="padding-top: .2em;">Calories per gram:</div>\
								<div class="insider-fl-title-4" style="text-align: center; padding-top: .2em;">Fat 9 <span class="insider-fl-title-4" style="font-size: 1em;">•</span> Carbohydrate 4 <span class="insider-fl-title-4" style="font-size: 1em;">•</span> Protein 4</div>\
							</div>\
						</div>\
					</div>',
			hasNavButtons: true,
			hasFotter: false
		},

		// 15: HE Glycemic Index
		{
			title: "HE: Glycemic Index",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Glycemic Index</div>\
						<div class="insider-notice insider-margin-top-small">Glycemic index (GI) is a way of expressing how carbohydrate-containing foods raise blood glucose.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Glycemic Index and Diabetes. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/understanding-carbohydrates/glycemic-index-and-diabetes.html. Accessed January 20, 2015.">1</sup>It is based on the principle that some carbohydrate-containing foods will raise blood glucose more rapidly than others. This is due to the rate at which the body breaks them down.</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>High GI foods (≥70) will raise blood glucose quickly.</div></li>\
							<li class="insider-bullet-b"><div>Low GI foods (≤55) will generally raise blood glucose more slowly.</div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-med">GI Considerations</div>\
						<ul class="insider-ul insider-margin-top-small">\
							<li class="insider-bullet-b"><div>Only foods containing carbohydrates have a glycemic index; fats and proteins do not.</div></li>\
							<li class="insider-bullet-b"><div>Pairing low GI foods with high GI foods can help to balance out effects on blood glucose levels.</div></li>\
							<li class="insider-bullet-b"><div>Even though Glycemic Index is a great indicator for healthy eating, food choices cannot be based on the GI values alone. For example, a baked potato has a high GI and ice cream has a low GI, yet a baked potato is a healthier food choice compared to ice cream. Therefore, it is important to combine different meal planning tools to maintain a healthy and balanced diet.</div></li>\
						</ul>\
					</div>\
					<div class="insider-fixed-section insider-hoz-regular-padding insider-margin-top-big">\
						<div class="insider-absolute-section">\
							<div class="row responsive-pr insider-row">\
								<div class="col-33 insider-padding-flex-tiny">\
									<div>\
										<div class="insider-fig-15-01 insider-fig-big"></div>\
									</div>\
								</div>\
								<div class="col-33 insider-padding-flex-tiny">\
									<div>\
										<div class="insider-fig-15-02 insider-fig-big"></div>\
									</div>\
								</div>\
								<div class="col-33 insider-padding-flex-tiny">\
									<div>\
										<div class="insider-fig-15-03 insider-fig-big"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>',
			slideContent: {
				title: 'Factors That Affect GI of Foods<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Glycemic Index and Diabetes. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/understanding-carbohydrates/glycemic-index-and-diabetes.html. Accessed January 20, 2015.">2</sup>',
				slides: [
					'\
					<div class="row responsive-pr insider-row">\
						<div class="col-50">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o"><div><span style="font-weight: bold">Ripeness</span> – the more ripe a fruit or vegetable is, the higher the GI</div></li>\
								<li class="insider-bullet-o"><div><span style="font-weight: bold">Cooking method</span> – the longer a food is cooked (e.g. al dente pasta vs. soft-cooked pasta) may increase its GI</div></li>\
							</ul>\
						</div>\
						<div class="col-50">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o"><div><span style="font-weight: bold">Ripeness</span> – the more ripe a fruit or vegetable is, the higher the GI\
									<ul class="insider-ul-sub insider-margin-top-small">\
										<li class="insider-bullet-s"><div>Juice has a higher GI than whole fruit </div></li>\
										<li class="insider-bullet-s"><div>A mashed potato has a higher GI than a whole baked potato.</div></li>\
									</ul>\
								</div></li>\
							</ul>\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 16: HE Meal Planning Tools
		{
			title: "HE: Meal Planning Tools",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Meal Planning Tools</div>\
						<div class="insider-notice insider-margin-top-small">A diabetes meal plan is a guide for how much and what kinds of food patients with diabetes can choose to eat at meals and snack times. A good meal plan should fit in with a patient’s schedule and eating habits.</div>\
						<div class="insider-sentence insider-margin-top-med">The right meal plan will help improve blood glucose, blood pressure, and cholesterol numbers and also help keep weight on track, whether a patient needs to lose or maintain weight.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Evert, AB, Boucher, JL, Cypress, M, et al. Nutrition Therapy Recommendations for the Management of Adults With Diabetes. Diabetes Care. 2013;36(11):3821-3842. doi:10.2337/dc13-2042.">1</sup> The plate method is one example of a meal planning tool.</div>\
						<div class="insider-subtitle insider-margin-top-med">Six steps to filling a meal plate:<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Create Your Plate. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/food/planning-meals/create-your-plate/. Accessed January 21, 2015.">2</sup></div>\
						<ol class="insider-ol insider-ol-bold-bullet insider-margin-top-small">\
							<li><span>Divide the plate in half and then divide one side in half (See diagram below)</span>\
							</li>\
							<li><span>Fill the largest section (½ of the plate) with non-starchy vegetables\
								<ul class="insider-ul">\
									<li class="insider-bullet-b"><div>eg. spinach, carrots, lettuce, greens, green beans, mushrooms, peppers, broccoli</div></li>\
								</ul></span>\
							</li>\
							<li><span>Fill one of the smaller sections (¼ of the plate) with grains and starchy foods (carbohydrates)\
								<ul class="insider-ul">\
									<li class="insider-bullet-b"><div>eg. bread, rice, pasta, green peas, potato, beans, tortilla</div></li>\
								</ul></span>\
							</li>\
							<li><span>Fill the other smaller section (¼ of the plate) with protein\
								<ul class="insider-ul">\
									<li class="insider-bullet-b"><div>eg. chicken, turkey, fish, lean beef, eggs, tofu</div></li>\
								</ul></span>\
							</li>\
							<li><span>Add a small serving of fruit or dairy if allotted</span>\
							</li>\
							<li><span>Drink a low-calorie or zero calorie beverage such as water, unsweetened tea, or coffee</span>\
							</li>\
						</ol>\
					</div>\
					<div class="insider-fig-huge insider-fig-16-01 insider-margin-top-big"></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 17: HE Other Considerations
		{
			title: "HE: Other Considerations",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Other Considerations</div>\
						<div class="insider-subtitle">Alcohol<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Alcohol. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/making-healthy-food-choices/alcohol.html. Accessed January 21, 2015.">1</sup></div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>The ADA has very specific recommendations for patients with diabetes who consume alcohol. Alcohol can have a negative effect on a patient’s blood glucose for up to 24 hours.</div></li>\
							<li class="insider-bullet-b"><div>\
								The ADA recommends:\
								<ul class="insider-ul-sub">\
									<li class="insider-bullet-s"><div>Only drink with food and never replace the carbohydrate portion of a meal with alcohol</div></li>\
									<li class="insider-bullet-s"><div>Drink only when blood glucose is under control</div></li>\
								</ul>\
							</div></li>\
						</ul>\
						<div class="insider-subtitle">Eating Away from Home:<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Ordering Tips. American Diabetes Association. 2013. Available at: http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/food-tips/eating-out/ordering-tips.html. Accessed January 22, 2015.">2</sup></div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Eating out can be tricky for patients with diabetes as many foods contain “hidden” fats and carbohydrates</div></li>\
							<li class="insider-bullet-b"><div>\
								The American Diabetes Association (ADA) recommends:\
								<ul class="insider-ul-sub">\
									<li class="insider-bullet-s"><div>Eat only recommended portion sizes and take the rest home or share</div></li>\
									<li class="insider-bullet-s"><div>Ask for sauces on the side</div></li>\
									<li class="insider-bullet-s"><div>Avoid breaded foods and breads brought to the table</div></li>\
									<li class="insider-bullet-s"><div>Request restaurant nutrition information</div></li>\
								</ul>\
							</div></li>\
						</ul>\
					</div>\
					<div class="insider-fig-bhm insider-fig-17-01 insider-margin-top-big"></div>',
			slideContent: {
				title: 'ADA Recommendations for Maximum Alcohol Consumption Per Day by Patients with Diabetes',
				slides: [
					'\
					<div class="row responsive-pr insider-row insider-big-margin-row">\
						<div class="col-50">\
							<div class="insider-fig-med insider-fig-17-02"></div>\
						</div>\
						<div class="col-50">\
							<div class="insider-fig-med insider-fig-17-03"></div>\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 18: HE Proteins
		{
			title: "HE: Proteins",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Proteins</div>\
						<div class="insider-notice insider-margin-top-small">The body breaks down proteins into amino acids, which are used to build new proteins. When carbohydrates and fats are not readily available, the body will use dietary protein as energy.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="USDA MyPlate Protein Foods Group -- Nutrients and health benefits. Available at: http://www.choosemyplate.gov/food-groups/protein-foods-why.html. Accessed January 22, 2015.">1</sup></div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>Proteins include meats, fish, cheese and beans.</div></li>\
							<li class="insider-bullet-b"><div>Proteins function as building blocks for bones, muscles, cartilage, skin, and blood.</div></li>\
							<li class="insider-bullet-b"><div>They are also building blocks for enzymes, hormones, and vitamins.</div></li>\
							<li class="insider-bullet-b"><div>Proteins, fat and carbohydrates are nutrients that provide calories.</div></li>\
							<li class="insider-bullet-b"><div>Taking fruits, juice or sweets with proteins, slows absorption of carbohydrates.</div></li>\
						</ul>\
						<div class="insider-sentence insider-margin-top-small">Lean proteins are an ideal food option for patients with diabetes because they offer filling, healthy food choices that contain no carbohydrates. This means they do not raise blood glucose.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Protein Foods. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/making-healthy-food-choices/meat-and-plant-based-protein.html. Accessed January 21, 2015.">2</sup></div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>\
								Lean protein examples:\
								<ul class="insider-ul-sub">\
									<li class="insider-bullet-s"><div>Fish, chicken (without the skin), and eggs.</div></li>\
								</ul>\
							</div></li>\
						</ul>\
					</div>\
					<div class="row responsive-pr insider-row insider-hoz-regular-padding insider-margin-top-med">\
						<div class="col-33">\
							<div class="insider-fig-med insider-fig-18-01"></div>\
						</div>\
						<div class="col-33">\
							<div class="insider-fig-med insider-fig-18-02"></div>\
						</div>\
						<div class="col-33">\
							<div class="insider-fig-med insider-fig-18-03"></div>\
						</div>\
					</div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 19: HE Sweeteners
		{
			title: "HE: Sweeteners",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Healthy Eating</div>\
						<div class="insider-small-title">Sweeteners</div>\
						<div class="insider-notice insider-margin-top-small">Nutritive sweeteners including sucrose, fructose, dextrose, corn sugar, maltose and honey, add carbohydrates and calories to diets. While called “nutritive”, they are low in nutritional value.</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>Patients with diabetes should avoid intake of nutritive sweeteners</div></li>\
							<li class="insider-bullet-b"><div>High intake of nutritive sweeteners contributes to cardiovascular disease, obesity and increase in blood glucose<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Evert, AB, Boucher, JL, Cypress, M, et al. Nutrition Therapy Recommendations for the Management of Adults With Diabetes. Diabetes Care. 2013;36(11):3821-3842. doi:10.2337/dc13-2042.">1</sup></div></li>\
						</ul>\
						<div class="insider-text insider-margin-top-med">\
							<p>Artificial sweeteners can be used in place of nutritive sweeteners to sweeten foods or beverages without adding calories or affecting blood glucose levels. Substituting artificial sweetener for sugar may help maintain healthy body weight.</p>\
							<p>The current FDA tested and approved artificial sweeteners are:</p>\
						</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>acesulfame potassium (Sweet One)</div></li>\
							<li class="insider-bullet-b"><div>aspartame (Nutrasweet or Equal)</div></li>\
							<li class="insider-bullet-b"><div>saccharin (Sweet ‘N Low)</div></li>\
							<li class="insider-bullet-b"><div>sucralose (Splenda)</div></li>\
							<li class="insider-bullet-b"><div>neotame</div></li>\
							<li class="insider-bullet-b"><div>advantame</div></li>\
						</ul>\
						<div class="insider-sentence insider-margin-top-tiny">The FDA has also claimed rebaudioside A (Truvia or PureVia) as generally recognized as safe for consumption.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Low-Calorie Sweeteners. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitnessfood/what-can-i-eat/understanding-carbohydrates/artificial-sweeteners/ Accessed January 21, 2015.">2</sup></div>\
					</div>',
			slideContent: {
				title: 'Possible Side Effects:<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="Low-Calorie Sweeteners. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitnessfood/what-can-i-eat/understanding-carbohydrates/artificial-sweeteners/ Accessed January 21, 2015.">3</sup>',
				slides: [
					'<div class="row responsive-pr insider-row">\
						<div class="col-50">\
							<ul class="insider-slide-ul insider-margin-top-small">\
								<li class="insider-bullet-o"><div>Due to a lack of studies about the long term effects, artificial sweeteners should be avoided or used in limitation in children and pregnant women.</div></li>\
								<li class="insider-bullet-o"><div>Aspartame is the only artificial sweetener which is digested by the body</div></li>\
								<li class="insider-bullet-o"><div>Some people cannot tolerate aspartame, especially people with PKU metabolism disorder.</div></li>\
							</ul>\
						</div>\
						<div class="col-50 insider-col-vma-image">\
							<div class="insider-fig-mbm insider-fig-19-01 vert-align"></div>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>Many foods containing low-calorie sweeteners will provide some calories and carbohydrates from other ingredients. Foods that carry claims like “sugar-free”, “reduced sugar” or “no sugar added” are not necessarily carbohdyrate-free or lower in carbohydrate than the original version of the food. Check the nutrition facts panel for more information.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content="Low-Calorie Sweeteners. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/food/what-can-i-eat/understanding-carbohydrates/artificial-sweeteners/ Accessed January 21, 2015.">4</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 20: PA Overview
		{
			title: "PA: Overview",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Overview</div>\
						<div class="insider-notice insider-margin-top-small">The ADA Standards of Medical Care – 2015 includes exercise as an important part of the diabetes management plan. Regular exercise has been shown to improve blood glucose control, reduce cardiovascular risk factors, contribute to weight loss, and improve well-being<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Standards of Medical Care in Diabetes-2015. Standards of Medical Care in Diabetes-2015. 2015. Available at: http://care.diabetesjournals.org/content/suppl/2014/12/23/38.supplement_1.dc1/january_supplement_combined_final.6-99.pdf. Accessed January 5, 2015.">1</sup></div>\
					</div>\
					<div class="insider-hoz-regular-padding insider-margin-top-med">\
						<div class="row responsive-pr insider-row">\
							<div class="col-49">\
								<div class="insider-fig-flex insider-fig-20-01"></div>\
							</div>\
							<div class="col-2">\
							</div>\
							<div class="col-49">\
								<div class="insider-fig-flex insider-fig-20-02"></div>\
							</div>\
						</div>\
						<div class="row responsive-pr insider-row insider-no-padding">\
							<div class="col-49">\
								<div class="insider-fig-flex insider-fig-20-03"></div>\
							</div>\
							<div class="col-2">\
							</div>\
							<div class="col-49">\
								<div class="insider-fig-flex insider-fig-20-04"></div>\
							</div>\
						</div>\
					</div>\
					<div class="insider-padding insider-text">\
						<p>Exercise, or physical activity, includes anything that gets people moving, such as walking, dancing, or working in the yard. Regular physical activity is important for everyone, but it is especially important for patients with diabetes and those at risk for diabetes.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Exercise and Type 2 Diabetes. ACE Fitness. Available at: http://www.acefitness.org/fitness-fact-article/2608/exercise-and-type-2-diabetes/ Accessed October 24, 2014.">2</sup></p>\
					</div>',
			slideContent: {
				title: 'Benefits of Physical Activity<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="Boule, NG. Effects of Exercise on Glycemic Control and Body Mass in Type 2 Diabetes Mellitus: A Meta-analysis of Controlled Clinical Trials. JAMA: The Journal of the American Medical Association. 2001;286(10):1218-1227. doi:10.1001/jama.286.10.1218.</>American Association of Clinical EndocrinologistsAACE Diabetes Resource Center. Treatment of T2DM. Available at: http://outpatient.aace.com/type-2-diabetes/treatment. Accessed September 10, 2014.">3,4</sup>',
				slides: [
					'<div class="row responsive-pr insider-row">\
						<div class="col-49">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o"><div>Improved glucose control</div></li>\
								<li class="insider-bullet-o"><div>Reduced CV risk factors</div></li>\
								<li class="insider-bullet-o"><div>Reduced weight</div></li>\
								<li class="insider-bullet-o"><div>Lowered BMI, BP, and LDL</div></li>\
								<li class="insider-bullet-o"><div>Decreased risk of falls and fractures </div></li>\
							</ul>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o"><div>Improved sense of well-being</div></li>\
								<li class="insider-bullet-o"><div>Reduced symptoms of depression</div></li>\
							</ul>\
							<div class="insider-sentence">\
								Structured exercise for 8 consecutive weeks has been shown to lower HbA1C on average by 0.66%<sup ng-click="onPopover($event)" class="insider-popover-tag" number="5" content="Standards of Medical Care in Diabetes-2015. Standards of Medical Care in Diabetes-2015. 2015. Available at: http://care.diabetesjournals.org/content/suppl/2014/12/23/38.supplement_1.dc1/january_supplement_combined_final.6-99.pdf. Accessed January 5, 2015">5</sup>\
							</div>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>Following regular exercise training, cells can better respond to insulin and effectively take glucose out of the blood and into the cell.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="6" content="Colberg, SR, Sigal, RJ, Fernhall, B, et al. Exercise and Type 2 Diabetes: The American College of  Sports Medicine and the American Diabetes Association: joint position statement. Diabetes Care. 2010;33(12):e147-e167. doi:10.2337/dc10-9990.">6</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 21: PA Guidelines For Physical Activity
		{
			title: "PA: Guidelines For Physical Activity",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Guidelines For Physical Activity</div>\
						<div class="insider-notice insider-margin-top-small">Many studies have shown that regular physical activity improves glucose control in persons with type 2 diabetes. Physical activity is also a factor in weight loss and is particularly important in the weight maintenance phase.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Colberg, SR, Sigal, RJ, Fernhall, B, et al. Exercise and Type 2 Diabetes: The American College of Sports Medicine and the American Diabetes Association: joint position statement. Diabetes Care. 2010;33(12):e147-e167. doi:10.2337/dc10-9990.">1</sup></div>\
						<div class="insider-subtitle insider-margin-top-med">ADA 2015 Guidelines for Physical Activity<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content="Standards of Medical Care in Diabetes-2015. Standards of Medical Care in Diabetes-2015. 2015. Available at: http://care.diabetesjournals.org/content/suppl/2014/12/23/38.supplement_1.dc1/january_supplement_combined_final.6-99.pdf Accessed January 5, 2015.">2</sup></div>\
					</div>\
					<div class="insider-hoz-padding-huge insider-margin-top-med">\
						<div class="insider-bubble-box-b">\
							<div class="insider-comment-box-b">\
								<span style="font-weight: bold; line-height: 1.7em;">Adults</span><br>\
								≥ 150 min/wk moderate intensity aerobic activity or<br>\
								≥ 75 min/wk of vigorous aerobic activity spread over<br>\
								≥ 3 days/wk with no more than 2 consecutive days w/o exercise. Individuals should limit and/or break up idle or inactive time, specifically any inactivity of more than 90 minutes.<br>\
							</div>\
							<div class="insider-fig-mbm insider-fig-21-01"></div>\
						</div>\
						<div class="insider-bubble-box-g">\
							<div class="insider-comment-box-g">\
								<span style="font-weight: bold; line-height: 1.7em;">Children <18</span><br>\
								≥ 60 minutes physical activity/day\
							</div>\
							<div class="insider-fig-smm insider-fig-21-02"></div>\
						</div>\
					</div>\
					<div class="insider-padding">\
						<div class="insider-subtitle">AACE Additional Guidelines for Physical Activity</div>\
						<div class="row responsive-pr insider-row">\
							<div class="col-75">\
								<div class="insider-sentence">\
									In addition to the guidelines recommended by the ADA, the AACE stresses the importance of daily, unstructured physical activity such as walking.\
								</div>\
								<ul class="insider-ul">\
									<li class="insider-bullet-b"><div>Patients can wear a pedometer to track steps throughout the day.</div></li>\
									<li class="insider-bullet-b"><div>AACE recommends at least 10,000 steps per day.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="American Association of Clinical EndocrinologistsAACE Diabetes Resource Center. Treatment of T2DM. Available at: http://outpatient.aace.com/type-2-diabetes/treatment Accessed September 10, 2014.">3</sup></div></li>\
								</ul>\
							</div>\
							<div class="col-25">\
								<div class="insider-fig-med insider-fig-21-03"></div>\
							</div>\
						</div>\
					</div>',
			slideContent: {
				title: 'Examples of Physical Activity<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content="Guide to Physical Activity. Exercise and Fitness. Available at: http://www.nhlbi.nih.gov/health/educational/lose_wt/phy_act.htm Accessed September 8, 2014.">4</sup>',
				slides: [
					'<div class="insider-slide-subtitle">Moderate Intensity</div>\
					<div class="row responsive-pr insider-row insider-margin-top-med">\
						<div class="col-45">\
							<div class="insider-fig-med insider-fig-21-04">\
							</div>\
						</div>\
						<div class="col-10">\
						</div>\
						<div class="col-45">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o"><div>Walking 2 miles in 30 min</div></li>\
								<li class="insider-bullet-o"><div>Stair walking for 15 min</div></li>\
								<li class="insider-bullet-o"><div>Bicycling 5 miles in 30 min</div></li>\
								<li class="insider-bullet-o"><div>Water aerobics for 30 min</div></li>\
								<li class="insider-bullet-o"><div>Gardening for 30-45 min</div></li>\
								<li class="insider-bullet-o"><div>Vacuuming for 30-45 min</div></li>\
							</ul>\
						</div>\
					</div>',
					'<div class="insider-slide-subtitle">Vigorous Activity</div>\
					<div class="row responsive-pr insider-row insider-margin-top-med">\
						<div class="col-45">\
							<div class="insider-fig-med insider-fig-21-05"></div>\
						</div>\
						<div class="col-10">\
						</div>\
						<div class="col-45">\
							<ul class="insider-slide-ul">\
								<li class="insider-bullet-o"><div>Running</div></li>\
								<li class="insider-bullet-o"><div>Jump rope</div></li>\
								<li class="insider-bullet-o"><div>Cycling class</div></li>\
								<li class="insider-bullet-o"><div>Sports Conditioning (e.g. Boot Camp, Zumba, Body Sculpting)</div></li>\
								<li class="insider-bullet-o"><div>Step aerobics</div></li>\
								<li class="insider-bullet-o"><div>High-Intensity Interval Training (e.g. Kickboxing)</div></li>\
							</ul>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>5 to 10 minutes of running each day can add years to life. Researchers found that 24% of people who ran regularly were 30% less likely to die from any cause over the course of the study and 45 percent less likely to die from heart disease than were those who didn’t run.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="5" content="Lee, D, Pate, RR, Lavie, CJ, Sui, X, Church, TS, Blair, SN. Leisure-Time Running Reduces All-Cause and Cardiovascular Mortality Risk. Journal of the American College of Cardiology. 2014;64(5):472-481. Available at: <span ng-click=\'onLink($event)\' class=\'insider-link\'>http://www.sciencedirect.com/science/article/pii/s0735109714027466</span> Accessed December 22, 2014.">5</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 22: PA Exercise and Blood Glucose Control
		{
			title: "PA: Exercise and Blood Glucose Control",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Exercise and Blood Glucose Control</div>\
						<div class="insider-notice insider-margin-top-small">For patients with diabetes, it’s important to check blood glucose levels before exercising to ensure safety.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Colberg, SR, Sigal, RJ, Fernhall, B, et al. Exercise and Type 2 Diabetes: The American College of Sports Medicine and the American Diabetes Association: joint position statement. Diabetes Care. 2010;33(12):e147-e167. doi:10.2337/dc10-9990.">1</sup></div>\
						<div class="insider-sentence insider-margin-top-small">Blood glucose response to exercise will vary depending on:</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Blood glucose level before starting activity</div></li>\
							<li class="insider-bullet-b"><div>Intensity of the activity</div></li>\
							<li class="insider-bullet-b"><div>Time length of the activity</div></li>\
							<li class="insider-bullet-b"><div>Changes made to insulin doses</div></li>\
						</ul>\
					</div>\
					<table class="insider-tb insider-margin-top-big">\
						<tr>\
							<th><div>Blood Glucose Range</div></th>\
							<th><div class="vert-align">Result</div></th>\
							<th><div class="vert-align">Recommendation</div></th>\
						</tr>\
						<tr>\
							<td><div class="res-div">Blood Glucose Range:</div><div class="con-div vert-align">< 100 mg/dL</div></td>\
							<td><div class="res-div">Result:</div><div class="con-div vert-align">Blood glucose is too low to exercise safely.<sup ng-click="onPopover($event)" class="insider-popover-tag-dark" number="*" content="This only applies to individuals taking insulin or the secretagogues more likely to cause hypoglycemia (e.g., sulfonylureas such as glyburide, glipizide, and glimepiride, as well as nateglinide and repaglinide).">✱</sup></div></td>\
							<td><div class="res-div">Recommendation:</div><div class="con-div">Eat a small (15g) carbohydrate-containing snack (fruit or crackers) before workout.<sup ng-click="onPopover($event)" class="insider-popover-tag-dark" number="*" content="This only applies to individuals taking insulin or the secretagogues more likely to cause hypoglycemia (e.g., sulfonylureas such as glyburide, glipizide, and glimepiride, as well as nateglinide and repaglinide).">✱</sup></div></td>\
						</tr>\
						<tr>\
							<td><div class="res-div">Blood Glucose Range:</div><div class="con-div vert-align">100-300 mg/dL</div></td>\
							<td><div class="res-div">Result:</div><div class="con-div">Safe pre-exercise blood sugar range.</div></td>\
							<td><div class="res-div">Recommendation:</div><div class="con-div vert-align"></div></td>\
						</tr>\
						<tr>\
							<td><div class="res-div">Blood Glucose Range:</div><div class="con-div vert-align">≥ 300 mg/dL</div></td>\
							<td><div class="res-div">Result:</div><div class="con-div">Safe to exercise without ketosis and feeling well.</div></td>\
							<td><div class="res-div">Recommendation:</div><div class="con-div vert-align">Important to stay hydrated.</div></td>\
						</tr>\
					</table>',
			lowerContent: '\
			<div class="row responsive-pr insider-row insider-margin-top-big insider-hoz-regular-padding">\
				<div class="col-80">\
					<div class="insider-protect-margin">\
						<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>New fitness tracking devices provide the ability to track movement (such as steps, miles, calories burned, sleep patterns and heart rate).</div>\
					</div>\
				</div>\
				<div class="col-20">\
					<div class="insider-fig-big insider-fig-22-01"></div>\
				</div>\
			</div>\
			',
			hasNavButtons: true,
			hasFooter: false
		},

		// 23: PA Exercise Intensity Levels
		{
			title: "PA: Exercise Intensity Levels",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Exercise Intensity Levels<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content="Colberg, SR, Sigal, RJ, Fernhall, B, et al. Exercise and Type 2 Diabetes: The American College of Sports Medicine and the American Diabetes Association: joint position statement. Diabetes Care. 2010;33(12):e147-e167. doi:10.2337/dc10-9990.</>Standards of Medical Care in Diabetes-2015. Standards of Medical Care in Diabetes-2015. 2015. Available at: http://care.diabetesjournals.org/content/suppl/2014/12/23/38.supplement_1.dc1/january_supplement_combined_final.6-99.pdf Accessed January 5, 2015.">1,2</sup></div>\
						<div class="insider-notice insider-margin-top-small">Exercising at the correct intensity can help patients get the most out of physical activity. For most healthy adults, the Department of Health and Human Services (HHS) recommends these exercise guidelines:</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b insider-bold insider-margin-top-med"><div>Aerobic activity.</div></li>\
							<li class="insider-bullet-t"><div>At least 150 minutes a week of moderate aerobic activity, such as brisk walking, swimming or mowing the lawn, or 75 minutes a week of vigorous aerobic activity such as running or aerobic dancing. A combination of moderate and vigorous activity, preferably spread throughout the course of a week, is a good plan.</div></li>\
						</ul>\
					</div>\
					<div class="row responsive-pr insider-row insider-hoz-regular-padding insider-margin-top-med">\
						<div class="col-33">\
							<div class="insider-fig-big insider-fig-23-01"></div>\
						</div>\
						<div class="col-33">\
							<div class="insider-fig-big insider-fig-23-02"></div>\
						</div>\
						<div class="col-33">\
							<div class="insider-fig-big insider-fig-23-03"></div>\
						</div>\
					</div>\
					<div class="insider-hoz-padding">\
						<ul class="insider-ul">\
							<li class="insider-bullet-b insider-bold insider-margin-top-med"><div>Strength training.</div></li>\
							<li class="insider-bullet-t"><div>Strength training exercises are most effective when performed at least twice a week. Examples include free weights, weight machines or activities that use one’s own body weight, such as rock climbing or heavy gardening.</div></li>\
						</ul>\
					</div>',
			slideContent: {
				title: 'Research on Physical Activity',
				slides: [
					'\
					<div class="row responsive-pr insider-row">\
						<div class="col-45">\
							Researchers analyzed 14 exercise studies involving 915 adults with type 2 diabetes. Aerobic exercise (such as walking and bike riding) was better at lowering A1C levels than was resistance training.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content="Schwingshackl, L, Missbach, B, Das, S, König, J, Hoffmann, G. Impact of different training modalities on glycaemic control and blood lipids in patients with type 2 diabetes: a systematic review and network meta-analysis. Diabetologia. 2014;57(9):1789-1797. doi:10.1007/s00125-014-3303-z.">3</sup>\
						</div>\
						<div class="col-10">\
						</div>\
						<div class="col-45">\
							A combination of both types of exercise was best, lowering A1C by 0.17 percentage points more than aerobic exercise alone and 0.62 percentage points more than resistance training alone.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content="Colberg, SR, Sigal, RJ, Fernhall, B, et al. Exercise and Type 2 Diabetes: The American College of Sports Medicine and the American Diabetes Association: joint position statement. Diabetes Care. 2010;33(12):e147-e167. doi:10.2337/dc10-9990.">4</sup>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>Empowering patients to make decisions about their goals, priorities and daily diabetes care activities is an effective method of helping patients take care of themselves<sup ng-click="onPopover($event)" class="insider-popover-tag" number="5" content=\'Funnell, M. M., and R. M. Anderson. "Empowerment and Self-Management of Diabetes." Clinical Diabetes 22.3 (2004): 123-27. Web. 23 Jan. 2015.\'>5</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 24: PA Measuring Heart Rate
		{
			title: "PA: Measuring Heart Rate",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Measuring Heart Rate</div>\
						<div class="insider-notice insider-margin-top-small">Exercise intensity must generally be at a moderate or vigorous level in order to deliver the most benefit. Measuring heart rate is a technique used to determine the intensity of physical activity.</div>\
						<ul class="insider-ul insider-margin-top-med insider-no-padding">\
							<li class="insider-bullet-b insider-bold"><div>Maximum heart rate</div></li>\
						</ul>\
						<div class="row responsive-pr insider-row">\
							<div class="col-66">\
								<ul class="insider-ul">\
									<li class="insider-bullet-t"><div>To estimate a person’s maximum heart rate, subtract their age from 220. For example a 40 year old would subtract 40 from 220, leaving 180. Therefore 180 beats per minute (bpm) is their maximum heart rate during physical activity.</div></li>\
								</ul>\
							</div>\
							<div class="col-33">\
								<div class="insider-fig-smm insider-fig-24-01"></div>\
							</div>\
						</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b insider-bold"><div>Moderate intensity activity</div></li>\
							<li class="insider-bullet-t"><div>(50-70% of maximum heart rate) For a maximum heart rate of 180 bpm: 0.5 X 180 = 90 bpm and 0.7 X 180 = 126 bpm. Therefore the moderate intensity target range is 90-126 bpm.</div></li>\
						</ul>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b insider-bold"><div>Vigorous intensity activity</div></li>\
							<li class="insider-bullet-t"><div>(70-85% of maximum heart rate) For a maximum heart rate of 180 bpm: 0.7 X 180 = 126 bpm and 0.85 X 180 = 153 bpm. Therefore the vigorous intensity target range is 126-153 bpm.</div></li>\
						</ul>\
					</div>',
			slideContent: {
				title: 'Calculating Heart Rate<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Target Heart Rate and Estimated Maximum Heart Rate. Centers for Disease Control and Prevention. 2011. Available at: http://www.cdc.gov/physicalactivity/everyone/measuring/heartrate.html. Accessed December 23, 2014.\'>1</sup>',
				slides: [
					'<div class="insider-hoz-padding-small">\
						<div class="row responsive-pr insider-row">\
							<div class="col-50">\
								<div class="insider-sentence insider-margin-top-small">Patients can:</div>\
								<ul class="insider-slide-ul insider-margin-top-small">\
									<li class="insider-bullet-o"><div>Buy a personal heart monitor at a drugstore to wear during physical activity</div></li>\
								</ul>\
							</div>\
							<div class="col-5">\
							</div>\
							<div class="col-45">\
								<div class="insider-fig-med insider-fig-24-02"></div>\
							</div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row">\
						<div class="col-75">\
							<div class="insider-sentence">OR:</div>\
							<ul class="insider-slide-ul insider-margin-top-small">\
								<li class="insider-bullet-o"><div>Manually measure their heart rate by stopping momentarily during activity and taking their pulse by: \
									<ul class="insider-ul-sub insider-margin-top-small">\
										<li class="insider-bullet-s"><div>Place two fingers between the bone and tendon over the wrist on the thumb side</div></li>\
										<li class="insider-bullet-s"><div>Counting the number of beats they feel for 15 seconds</div></li>\
										<li class="insider-bullet-s"><div>Multiplying this number by 4</div></li>\
									</ul>\
								</div></li>\
								<li class="insider-bullet-o"><div>The resulting number is their heart rate in bpm.</div></li>\
							</ul>\
						</div>\
						<div class="col-25">\
							<div class="insider-fig-med insider-fig-24-03 insider-margin-top-med"></div>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>When initiating an exercise plan, patients should start off with a goal of around 50% of their maximum heart rate during activity to avoid overexertion.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content=\'Fitness. Exercise intensity: How to measure it. 2014. Available at: http://www.mayoclinic.org/healthy-living/fitness/in-depth/exercise-intensity/art-20046887?pg=2. Accessed October 2, 2014.\'>2</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 25: PA Measuring Health and Fitness
		{
			title: "PA: Measuring Health and Fitness",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Measuring Health and Fitness<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Adapted from: Body Mass Index Table 1. Body Mass Index Table 1. Available at: http://www.nhlbi.nih.gov/health/educational/lose_wt/bmi/bmi_tbl.htm. Accessed October 2, 2014.\'>1</sup></div>\
						<div class="insider-notice insider-margin-top-small">Weight alone may not be a clear indicator of good health because it does not distinguish between pounds that come from body fat and those that come from lean body mass or muscle. To better measure health and fitness, Body Mass Index (BMI) and body fat percentage are two frequently used calculations.</div>\
						<div class="insider-sentence insider-margin-top-med">BMI is a measure of health based on a person’s height and weight.</div>\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Metric Formula: BMI = weight in kg ÷ height in meters<sup>2</sup></div></li>\
							<li class="insider-bullet-b"><div>Standard Formula: BMI = (weight in pounds ÷ height in inches<sup>2</sup>) x 703</div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-med">Body Mass Index (BMI)</div>\
						<div class="insider-text insider-margin-top-small">\
							<span style="font-weight: bold">Example:</span> Height 73” (6’1”) Weight 175 lb<br>\
							<span style="font-weight: bold">BMI</span> =  (175 ÷ 732) x 703 = (175 ÷ 5,329) x 703 = .03284 x 703 = 23<br>\
							<span style="font-weight: bold">BMI of 23 = Normal Weight</span><br>\
						</div>\
					</div>\
					<div class="insider-hoz-padding-big">\
						<div class="insider-fig-giant insider-margin-top-big insider-fig-25-01"></div>\
					</div>',
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>When initiating an exercise plan, patients should start off with a goal of around 50% of their maximum heart rate during activity to avoid overexertion.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content=\'Fitness. Exercise intensity: How to measure it. 2014. Available at: http://www.mayoclinic.org/healthy-living/fitness/in-depth/exercise-intensity/art-20046887?pg=2. Accessed October 2, 2014.\'>2</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 26: PA Body Fat Percentage
		{
			title: "PA: Body Fat Percentage",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Body Fat Percentage<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Zeratsky, K. normal body weight?. Mayo Clinic. 2014. Available at: http://www.mayoclinic.org/diseases-conditions/obesity/expert-answers/normal-weight-obesity/faq-20058313.\'>1</sup></div>\
						<div class="insider-notice insider-margin-top-small">BMI is used to determine whether a person is at a healthy weight for their height. But BMI doesn\'t tell the whole story because it doesn\'t measure body composition. So one may have a normal BMI while their body fat percentage is high enough to increase health risks.</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>Achieving a healthy body fat percentage can be done through healthy eating and the addition of physical activity.</div></li>\
							<li class="insider-bullet-b"><div>Body composition is just as important as maintaining a healthy weight.</div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-med">Weight Management<sup ng-click="onPopover($event)" class="insider-popover-tag" number=2" content=\'Standards of Medical Care in Diabetes-2015. Standards of Medical Care in Diabetes-2015. 2015. Available at: http://care.diabetesjournals.org/content/suppl/2014/12/23/38.supplement_1.dc1/january_supplement_combined_final.6-99.pdf. Accessed January 5, 2015.\'>2</sup></div>\
						<div class="insider-sentence insider-margin-top-small">For patients with diabetes, being overweight or obese increases the risk for comorbidities and potential complications. A combination of physical activity and a healthy diet is the best way to lose weight. Losing just a few pounds can help with diabetes control and can reduce risk for other health problems. Weight loss benefits also include improved glycemic control, BP, and/or lipid levels.</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>For a 180 lb person, this equals a weight loss goal of 12.6 lb</div></li>\
						</ul>\
					</div>\
					<div class="insider-hoz-padding-big">\
						<div class="insider-fig-bhm insider-margin-top-big insider-fig-26-01"></div>\
					</div>',
			slideContent: {
				title: 'Interpretation of BMI for adults<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content=\'About BMI for Adults. Centers for Disease Control and Prevention. 2014. Available at: http://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html. Accessed January 15, 2015.\'>3</sup>',
				slides: [
					'<div class="row responsive-pr insider-row insider-smaller-font">\
						<div class="col-45">\
							<div class="insider-sentence">For adults 20 years old and older, BMI is interpreted using standard weight status categories that are the same for all ages and for both men and women.</div>\
							<div class="insider-sentence insider-margin-top-small">For children and teens, on the other hand, the interpretation of BMI is both age- and sex-specific.</div>\
						</div>\
						<div class="col-10">\
						</div>\
						<div class="col-45">\
							<div class="insider-sentence">For more information about interpretation for children and teens, see the Child and Teen BMI Calculator at: </div>\
							<div class="insider-link insider-link-b insider-margin-top-med" ng-click="onLink($event)">http://nccd.cdc.gov/dnpabmi/Calculator.aspx</div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-long-row insider-smaller-font">\
						<div class="col-45">\
							<div class="insider-sentence">The standard weight status categories associated with BMI ranges for adults are shown in the following table.</div>\
							<div class="insider-margin-top-med"></div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-50">\
							<div class="insider-table insider-table-slide">\
								<div class="row insider-table-row" style="background-color: #0082ca">\
									<div class="col-50 insider-cell-text">\
										<div>BMI</div>\
									</div>\
									<div class="col-50 insider-cell-text">\
										<div>Weight Status</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-50 insider-cell-text">\
										<div>Below 18.5</div>\
									</div>\
									<div class="col-50 insider-cell-text">\
										<div>Underweight</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-50 insider-cell-text">\
										<div>18.5 - 24.9</div>\
									</div>\
									<div class="col-50 insider-cell-text">\
										<div>Normal</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-50 insider-cell-text">\
										<div>25.0 - 29.9</div>\
									</div>\
									<div class="col-50 insider-cell-text">\
										<div>Overweight</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-50 insider-cell-text">\
										<div>30.0 and above</div>\
									</div>\
									<div class="col-50 insider-cell-text">\
										<div>Obese</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-long-row insider-smaller-font">\
						<div class="col-40">\
							<div class="insider-sentence">The standard weight status categories associated with BMI ranges for adults are shown in the following table.</div>\
							<div class="insider-margin-top-med"></div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-55">\
							<div class="insider-table insider-table-slide insider-table-small-padding">\
								<div class="row insider-table-row" style="background-color: #63b300">\
									<div class="col-20 insider-cell-text">\
										<div>BMI</div>\
									</div>\
									<div class="col-20 insider-cell-text">\
										<div>Weight Status</div>\
									</div>\
									<div class="col-25 insider-cell-text">\
										<div>BMI</div>\
									</div>\
									<div class="col-35 insider-cell-text">\
										<div>Weight Status</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-20 insider-cell-text" style="border: none;">\
										<div></div>\
									</div>\
									<div class="col-20 insider-cell-text">\
										<div>124 lbs or less</div>\
									</div>\
									<div class="col-25 insider-cell-text">\
										<div>Below 18.5</div>\
									</div>\
									<div class="col-35 insider-cell-text">\
										<div>Underweight</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-20 insider-cell-text" style="border: none;">\
										<div class="insider-cell-mc">5\' 9"</div>\
									</div>\
									<div class="col-20 insider-cell-text">\
										<div>125 lbs to 163 lbs</div>\
									</div>\
									<div class="col-25 insider-cell-text">\
										<div>18.5 - 24.9</div>\
									</div>\
									<div class="col-35 insider-cell-text">\
										<div>Normal</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-20 insider-cell-text" style="border: none;">\
										<div></div>\
									</div>\
									<div class="col-20 insider-cell-text">\
										<div>169 lbs to 202 lbs</div>\
									</div>\
									<div class="col-25 insider-cell-text">\
										<div>25.0 - 29.9</div>\
									</div>\
									<div class="col-35 insider-cell-text">\
										<div>Overweight</div>\
									</div>\
								</div>\
								<div class="row insider-table-row">\
									<div class="col-20 insider-cell-text">\
										<div></div>\
									</div>\
									<div class="col-20 insider-cell-text">\
										<div>203 lbs or more</div>\
									</div>\
									<div class="col-25 insider-cell-text">\
										<div>30.0 or higher</div>\
									</div>\
									<div class="col-35 insider-cell-text">\
										<div>Obese</div>\
									</div>\
								</div>\
							</div>\
							<div class="insider-margin-top-med"></div>\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 27: PA Impact of Exercise
		{
			title: "PA: Impact of Exercise",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Impact of Exercise<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Colberg SR, Sigal RJ, Fernhall B, Regensteiner JG, Blissmer BJ, Rubin RR, Chasan-Taber L, Albright AL, Braun B, American College of Sports Medicine, et al. Diabetes Care. 2010 Dec; 33(12):e147-67.</>Exercise and Type 1 Diabetes. American Diabetes Association. 2014. Available at: http://www.diabetes.org/food-and-fitness/fitness/exercise-and-type-1-diabetes.html. Accessed December 23, 2014.\'>1,2</sup></div>\
						<div class="insider-notice insider-margin-top-small">Regardless of the type of diabetes, regular physical activity is important for overall health and wellness.</div>\
						<div class="insider-text insider-margin-top-med">\
							<p>With type 1 diabetes, it’s very important to balance insulin doses with food and activity.</p>\
							<p>A type 1 patient should plan ahead and know their body’s typical blood glucose response to exercise. This will help keep their blood glucose from going too low or too high.</p>\
						</div>\
						<div class="insider-subtitle insider-margin-top-med">Preventing Lows</div>\
						<div class="insider-sentence insider-margin-top-small">Blood glucose response to exercise will vary depending on:</div>\
						<ul class="insider-ul insider-margin-top-small">\
							<li class="insider-bullet-b"><div>blood glucose level before starting activity</div></li>\
							<li class="insider-bullet-b"><div>the intensity of the activity</div></li>\
							<li class="insider-bullet-b"><div>the duration of activity</div></li>\
							<li class="insider-bullet-b"><div>changes made to insulin doses</div></li>\
						</ul>\
						<div class="insider-text insider-margin-top-med">\
							<p>Sometimes people experience a drop in blood glucose during or after exercise, so it is very important they monitor their blood glucose, take proper precautions, and be prepared to treat hypoglycemia.</p>\
							<p>In order to learn how different types of activity affect them, they should frequently check their blood glucose before, during, and after an exercise session.</p>\
							<p>Increased activity may require a lower insulin dose or eating extra carbohydrates before exercising to keep blood glucose in a safe range. Some activities may cause blood glucose to drop quickly, while others may not.</p>\
						</div>\
						<ul class="insider-ul insider-margin-top-small">\
							<li class="insider-bullet-b"><div>If blood glucose levels are trending down before a workout, a pre-exercise snack is warranted. Carry a carbohydrate food or drink (like juice or glucose tabs) to quickly raise blood glucose. </div></li>\
							<li class="insider-bullet-b"><div>If blood glucose level is less than 100 mg/dl before activity, a small carbohydrate snack (about 15 grams) will increase blood glucose and reduce the risk for hypoglycemia. This is especially important if circulating insulin levels will be higher during the time of exercise and if the exercise lasts longer than 30 minutes.</div></li>\
							<li class="insider-bullet-b"><div>If on an insulin pump, patients may be able to avoid adding an extra snack by lowering their basal insulin rate during the activity.</div></li>\
						</ul>\
						<div class="insider-subtitle insider-margin-top-small">If the patient with type 1 diabetes has repeated problems with low blood glucose dropping during or after exercise, they should consult with their physician.</div>\
						<div class="insider-subtitle insider-margin-top-med">High Blood Glucose:</div>\
						<div class="insider-text insider-margin-top-med">\
							<p>Blood glucose can also run high during or after exercise, particularly when doing a high-intensity exercise that increase stress hormone levels.</p>\
							<p>If they feel well, and do not have ketones in their blood or urine, it should be fine to exercise.</p>\
						</div>\
					</div>',
			slideContent: {
				title: 'Blood Glucose Monitoring and Exercise',
				slides: [
					'<div class="insider-slide-subtext">In order to learn how different types of activity affect them, they should frequently check their blood glucose before, during, and after an exercise session.</div>\
					<div class="row responsive-pr insider-row insider-hoz-padding-med insider-margin-top-small">\
						<div class="col-2">\
						</div>\
						<div class="col-30">\
							<div class="insider-fig-mbm insider-fig-27-01 insider-margin-top-med"></div>\
						</div>\
						<div class="col-3">\
						</div>\
						<div class="col-30">\
							<div class="insider-fig-mbm insider-fig-27-02 insider-margin-top-med"></div>\
						</div>\
						<div class="col-3">\
						</div>\
						<div class="col-30">\
							<div class="insider-fig-mbm insider-fig-27-03 insider-margin-top-med"></div>\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 28: PA Safety Tips
		{
			title: "PA: Safety Tips",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Physical Activity</div>\
						<div class="insider-small-title">Safety Tips<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Injury-Free Exercise - 11 Quick Safety Tips. American Diabetes Association. 2013. Available at: http://www.diabetes.org/food-and-fitness/fitness/get-started-safely/injury-free-exercise.html. Accessed December 23, 2014.\'>1</sup></div>\
						<div class="insider-notice insider-margin-top-small">To help prevent injuries, dehydration, and hypoglycemia when exercising, patients with diabetes should:</div>\
						<ul class="insider-ul insider-big-padding-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>Start slowly, especially if they have not been active for a while.</div></li>\
							<li class="insider-bullet-b"><div>Talk to their health care team about which activities are safest.</div></li>\
							<li class="insider-bullet-b"><div>Warm up for 5 minutes before starting to exercise and cool down for 5 minutes after. Warm up or cool down should be a lower intensity than the rest of the time exercising.</div></li>\
							<li class="insider-bullet-b"><div>Avoid doing activity in extremely hot or cold temperatures.</div></li>\
							<li class="insider-bullet-b"><div>Drink plenty of water before, during, and after activity.</div></li>\
							<li class="insider-bullet-b"><div>Be prepared to test for and treat a low if they feel it coming on, and carry a source of carbohydrate to treat low blood glucose if needed.</div></li>\
							<li class="insider-bullet-b"><div>Consider having a sports drink that provides carbohydrates if exercising for an extended period (more than an hour or two).</div></li>\
							<li class="insider-bullet-b"><div>Engage in activities that are energizing but not too hard. Patients with diabetes should use the “talk test” – If they become short of breath and can’t talk, they should slow down.</div></li>\
							<li class="insider-bullet-b"><div>Take care of their feet by wearing shoes and clean socks that fit well.</div></li>\
							<li class="insider-bullet-b"><div>Carefully inspect their feet before and after activity for blisters, redness, or other signs of irritation. Talk to their doctor if experiencing a foot injury or a non-healing blister, cut, or sore.</div></li>\
							<li class="insider-bullet-b"><div>Stop doing an activity if they feel any pain or lightheadedness and talk to their doctor about any unusual symptoms that they experience.</div></li>\
						</ul>\
					</div>',
			slideContent: {
				title: 'Risk of Injury',
				slides: [
					'<div class="row responsive-pr insider-row insider-margin-top-small">\
						<div class="col-49">\
							<div class="insider-text">\
								Patients should check with their health care provider before making big changes in their exercise plan. If they have any diabetes complications, there may be certain exercises they should avoid.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content=\'Injury-Free Exercise - 11 Quick Safety Tips. American Diabetes Association. 2013. Available at: http://www.diabetes.org/food-and-fitness/fitness/get-started-safely/ injury-free-exercise.html. Accessed December 23, 2014.\'>2</sup>\
							</div>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<div class="insider-text">\
								<p>The age and previous level of physical activity should be considered when developing a program.</p>\
								<div class="insider-fig-smm insider-fig-28-01 insider-margin-top-med"></div>\
							</div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-margin-top-small">\
						<div class="col-49">\
							<div class="insider-text">\
								Patients should wear a medical ID tag, especially during exercise, so if a hypoglycemic event or collapse occurs, proper medical help can be given.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content=\'Get Started Safely. American Diabetes Association. Available at: http://www.diabetes.org/food-and-fitness/fitness/get-started-safely/. Accessed January 14, 2015.\'>3</sup>\
							</div>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<div class="insider-text">\
								<div class="insider-fig-med insider-fig-28-02"></div>\
							</div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-margin-top-small">\
						<div class="col-49">\
							<div class="insider-text">\
								Patients should NOT exercise when urine tests show elevated ketones and blood glucose.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content=\'DKA (Ketoacidosis) & Ketones. American Diabetes Association. American Diabetes Association, n.d. Web. 21 Jan. 2015. http://www.diabetes.org/living-with-diabetes/ complications/ketoacidosis-dka.html.\'>4</sup>\
							</div>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<div class="insider-text">\
								<div class="insider-fig-med insider-fig-28-03"></div>\
							</div>\
						</div>\
					</div>'
				]
			},
			hasNavButtons: true,
			hasFooter: false
		},

		// 29: BB What is Diabetes?
		{
			title: "BB: What is Diabetes?",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Background Basics</div>\
						<div class="insider-small-title">What is Diabetes?</div>\
						<div class="insider-notice insider-margin-top-small">Diabetes is a chronic health condition in which the body cannot produce or use insulin effectively. Insulin is made in the pancreas, and it is released after a meal to deliver glucose (energy) to the cells.</div>\
						<div class="insider-sentence insider-margin-top-med">When the body does not have insulin (or cannot use it effectively), glucose begins to build up in the bloodstream. Over time, high blood glucose levels can lead to complications, including retinopathy, peripheral neuropathy, albuminuria and nephrothapy.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Diabetes Mellitus. The Merck Manual Home Edition. 2013. http://www.merckmanuals.com/home/hormonal_and_metabolic_disorders/diabetesmellitusdm/diabetes_mellitus.html. Accessed February 7, 2015.\'>1</sup></div>\
					</div>\
					<div class="insider-hoz-padding-big">\
						<div class="insider-fig-eno insider-margin-top-big insider-fig-29-01"></div>\
					</div>',
			slideContent: {
				title: 'Complications Caused by Diabetes:<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content=\'“Diabetes Mellitus.” The Merck Manual Home Edition. Merck Sharp & Dohme Corp., July 2013. Web. 07 Feb. 2015.\'>2</sup>',
				slides: [
					'<div class="row responsive-pr insider-row insider-margin-top-small">\
						<div class="col-5">\
						</div>\
						<div class="col-49">\
							<div class="insider-fig-mbm insider-fig-29-02"></div>\
						</div>\
						<div class="col-35">\
							<ul class="insider-slide-ul insider-slide-ul-med insider-margin-top-med">\
								<li class="insider-bullet-y"><div>Retinopathy</div></li>\
								<li class="insider-bullet-g"><div>Peripheral Neuropathy</div></li>\
								<li class="insider-bullet-o"><div>Albuminuria and Nephropathy</div></li>\
							</ul>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>1 in 4 people with diabetes DO NOT KNOW they have it.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content=\'More than 29 million Americans have diabetes; 1 in 4 doesn’t know. Centers for Disease Control and Prevention. 2014. http://www.cdc.gov/media/releases/2014/p0610-diabetes-report.html. Accessed February 11, 2015.\'>3</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 30: BB Types of Diabets Mellitus (DM)
		{
			title: "BB: Types of Diabetes Mellitus (DM)",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Background Basics</div>\
						<div class="insider-small-title">Types of Diabetes Mellitus (DM)</div>\
						<ul class="insider-ul insider-margin-top-med">\
							<li class="insider-bullet-b"><div>Type 1 – the pancreas does not produce insulin and is usually diagnosed in children and young adults.</div></li>\
						</ul>\
						<div class="insider-sentence">Approximately 5% of diabetes patients have Type 1 DM.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Type 1 Diabetes. American Diabetes Association. http://www.diabetes.org/diabetes-basics/type-1/. Accessed February 7, 2015.\'>1</sup></div>\
					</div>\
					<div class="insider-hoz-padding-big">\
						<div class="insider-fig-bhm insider-margin-top-big insider-fig-30-01"></div>\
					</div>\
					<div class="insider-padding">\
						<ul class="insider-ul">\
							<li class="insider-bullet-b"><div>Type 2 – the pancreas does not make enough insulin to support the body and/or the body does not use insulin effectively.</div></li>\
						</ul>\
						<div class="insider-sentence">Approximately 95% of diabetes patients have Type 2 DM.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content=\'Facts About Type 2. American Diabetes Association. http://www.diabetes.org/diabetes-basics/type-2/facts-about-type-2.html. Accessed February 4, 2015.\'>2</sup></div>\
					</div>\
					<div class="insider-hoz-padding-big">\
						<div class="insider-fig-bhm insider-margin-top-big insider-fig-30-02"></div>\
					</div>',
			slideContent: {
				title: 'Pre-Diabetes',
				slides: [
					'<div class="row responsive-pr insider-row insider-margin-top-small">\
						<div class="col-49">\
							<div class="insider-text insider-font-1-1-5">\
								<p>Pre-diabetes (also known as impaired glucose tolerance or impaired fasting glucose), is a term used to describe patients who have higher than average blood glucose but don’t yet qualify for a diabetes diagnosis.</p>\
								<p>The criteria for pre-diabetes are shown in the chart to the right:<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content=\'Diagnosing Diabetes and Learning About Prediabetes. American Diabetes Association. http://www.diabetes.org/diabetes-basics/diagnosis Accessed February 9, 2015.\'>3</sup></p>\
							</div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-45">\
							<div class="insider-fig-mbm insider-fig-30-03 insider-margin-top-small"></div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-margin-top-small">\
						<div class="col-49">\
							<div class="insider-fig-med insider-fig-30-04"></div>\
						</div>\
						<div class="col-5">\
						</div>\
						<div class="col-45">\
							<div class="insider-text insider-txt-pd">\
								<p>86 million American adults – more than 1 out of 3 – have prediabetes.<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content=\'Center for Disease Control and Prevention. National Diabetes Statistics Report, 2014. National Diabetes Statistics Report, 2014. http://www.cdc.gov/diabetes/pubs/statsreport14/national-diabetes-report-web.pdf. Accessed February 9, 2015.\'>4</sup></p>\
							</div>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>A third type of diabetes, Gestational Diabetes, develops in the mother during pregnancy<sup ng-click="onPopover($event)" class="insider-popover-tag" number="5" content=\'Standards of Medical Care in Diabetes-2015. Standards of Medical Care in Diabetes-2015. 2015. Accessed January 5, 2015.\'>5</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 31: BB National Diabetes Statistics
		{
			title: "BB: National Diabetes Statistics",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title">Background Basics</div>\
						<div class="insider-small-title">National Diabetes Statistics</div>\
						<div class="insider-notice insider-margin-top-small">The CDC estimates 9.3% of the U.S. population has diabetes</div>\
						<div class="row responsive-pr insider-row insider-margin-top-big">\
							<div class="col-60">\
								<div class="insider-fig-mbm insider-fig-31-01"></div>\
							</div>\
							<div class="col-40">\
								<ul class="insider-ul insider-margin-top-flex-med">\
									<li class="insider-bullet-r"><div>21 million diagnosed</div></li>\
									<li class="insider-bullet-o"><div>8.1 million undiagnosed</div></li>\
								</ul>\
							</div>\
						</div>\
						<div class="insider-subtitle-nds insider-margin-top-med">Distribution of diabetes among the U.S. population by race/ ethnicity<sup ng-click="onPopover($event)" class="insider-popover-tag" number="1" content=\'Center for Disease Control and Prevention. National Diabetes Statistics Report, 2014. National Diabetes Statistics Report, 2014. http://www.cdc.gov/diabetes/pubs/statsreport14/national-diabetes-report-web.pdf. Accessed February 9, 2015.\'>1</sup></div>\
					</div>\
					<div class="insider-hoz-padding-big">\
						<div class="insider-fig-smm insider-margin-top-big insider-fig-31-02"></div>\
					</div>\
					<div class="insider-padding insider-padding-nds">\
						<div class="row responsive-pr insider-row">\
							<div class="col-49">\
								<ul class="insider-ul">\
									<li class="insider-bullet-y"><div>Non-Hispanic white 7.6%</div></li>\
									<li class="insider-bullet-r"><div>Asian 9%</div></li>\
									<li class="insider-bullet-b"><div>Hispanic 12.8%</div></li>\
								</ul>\
							</div>\
							<div class="col-2">\
							</div>\
							<div class="col-29">\
								<ul class="insider-ul">\
									<li class="insider-bullet-g"><div>Non-Hispanic Black 13.2%</div></li>\
									<li class="insider-bullet-o"><div>American Indian/ Alaska natives 15.9%</div></li>\
								</ul>\
							</div>\
						</div>\
					</div>',
			slideContent: {
				title: 'Worldwide Diabetes Statistics',
				slides: [
					'<div class="row responsive-pr insider-row insider-hoz-padding-nds">\
						<div class="col-49">\
							<ul class="insider-ul">\
								<li class="insider-bullet-o"><div><span style="font-size: 2em;">4 of 5</span> people with diabetes live in low to middle-income countries<sup ng-click="onPopover($event)" class="insider-popover-tag" number="2" content=\'10 facts about diabetes. World Health Organization. http://www.who.int/features/factfiles/diabetes/facts/en/index7.html. Accessed February 9, 2015.\'>2</sup></div></li>\
							</ul>\
						</div>\
						<div class="col-2">\
						</div>\
						<div class="col-49">\
							<div class="insider-fig-smmm insider-fig-31-03"></div>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-hoz-padding-nds insider-hoz-padding-nds-temp">\
						<div class="col-5">\
						</div>\
						<div class="col-45">\
							<ul class="insider-ul">\
								<li class="insider-bullet-o"><div>Diabetes caused<br><span style="font-size: 2em;">4.9 million</span><br>deaths in 2014</div></li>\
							</ul>\
						</div>\
						<div class="col-10">\
						</div>\
						<div class="col-45">\
							<ul class="insider-ul">\
								<li class="insider-bullet-o"><div><span style="font-size: 2em;">387 million</span><br>people living with<br>diabetes worldwide<sup ng-click="onPopover($event)" class="insider-popover-tag" number="3" content=\'IDF DIABETES ATLAS 2014 Sixth Edition.; 1818. http://www.idf.org/sites/default/files/atlas-poster-2014_en.pdf. Accessed February 9, 2015.\'>3</sup></div></li>\
							</ul>\
						</div>\
					</div>',
					'<div class="row responsive-pr insider-row insider-hoz-padding-nds insider-hoz-padding-nds-temp">\
						<div class="col-5">\
						</div>\
						<div class="col-45">\
							<ul class="insider-ul">\
								<li class="insider-bullet-o"><div>The International Diabetes<br>Foundation estimates<br><span style="font-size: 2em;">592 million</span><br>people will be living with<br>diabetes in 2035</div></li>\
							</ul>\
						</div>\
						<div class="col-10">\
						</div>\
						<div class="col-45">\
							<ul class="insider-ul">\
								<li class="insider-bullet-o"><div><span style="font-size: 2em;">> 79,000</span><br>children develop DM<br>Type 1 every year</div></li>\
							</ul>\
						</div>\
					</div>'
				]
			},
			lowerContent: '<div class="insider-info insider-margin-top-huge"><div class="insider-dyk"></div><div class="insider-dyk-placeholder"></div>It is estimated that 1 of 3 U.S. adults will have diabetes by 2050, with the current trend<sup ng-click="onPopover($event)" class="insider-popover-tag" number="4" content=\'Diabetes. Chronic Disease Prevention and Health Promotion. 2011. http://www.cdc.gov/chronicdisease/resources/publications/aag/ddt.htm Accessed February 7, 2015.\'>4</sup></div>',
			hasNavButtons: true,
			hasFooter: false
		},

		// 32: SC Free CONTOUR®NEXT portfolio meters for your patients
		{
			title: "SC: Free CONTOUR®NEXT portfolio meters for your patients",
			upperContent: '\
					<div class="insider-padding">\
						<div class="row responsive-pr insider-row insider-margin-top-small">\
							<div class="col-60">\
								<div class="insider-title-sc">\
									<span style="font-weight: bold;">Free</span><br> CONTOUR<sup>®</sup>NEXT portfolio meters for your patients\
								</div>\
							</div>\
							<div class="col-5">\
							</div>\
							<div class="col-35">\
								<div class="insider-text">\
									<div class="insider-fig-med insider-fig-32-01"></div>\
								</div>\
							</div>\
						</div>\
						<div class="insider-notice-sc insider-margin-top-small">CONTOUR<sup>®</sup>NEXT EZ • CONTOUR<sup>®</sup>NEXT • CONTOUR<sup>®</sup>NEXT USB</div>\
						<div class="insider-sentence" style="-webkit-text-stroke: .5px; font-size: 1.25em;">PHARMACIST REMINDER: CONTOUR<sup>®</sup>NEXT Test Strips and Control Solutions are sold separately.</div>\
					</div>\
					<div class="page-green-footer insider-margin-top-big"></div>\
					<div class="insider-padding">\
						<div class="insider-subtitle-sc">Provide your patient with a Free CONTOUR<sup>®</sup>NEXT meter today:</div>\
						<div class="insider-fig-mbm insider-fig-32-02 insider-margin-top-med"></div>\
						<div class="insider-text insider-margin-top-med">\
							<ul class="insider-ul-sc insider-margin-top-med">\
								<li>The identification number above can be used for all patients</li>\
								<li>Limit 1 meter per patient per 12 month period for purchase of product indicated</li>\
								<li>This offer cannot be redeemed for cash, or combined with any other offer, coupon, or discount.</li>\
								<li>Transmit claim on-line to OPTUMRx. For assistance in filing this claim contact the Help Desk at 1-800-510-4836.</li>\
								<li>This offer must be accompanied by a prescription for a CONTOUR<sup>®</sup>NEXT Portfolio meter or unbranded meter. Contact physician if no prescription on file.</li>\
								<li>Processor requires valid Prescriber ID#, Patient Name, and DOB for claim adjudication.</li>\
								<li>Ascensia reserves the right to terminate the program without notice</li>\
								<li>Contact your Ascensia Diabetes Care Sales Representative for additional coupons</li>\
								<li>Offer void where prohibited by law.</li>\
							</ul>\
						</div>\
						<div class="insider-text insider-margin-top-big" style="font-size: 95%">\
							<p>These products are provided for evaluation purposes only and may not be charged to any patient and the provider may not submit a claim for reimbursement to Medicare, Medicaid, or other public or private insurer for the sample product.</p>\
							<p>*Limitations and restrictions apply.</p>\
						</div>\
					</div>',
			hasNavButtons: false,
			hasFooter: false
		},

		// 33: SC CONTOUR® Choice Program
		{
			title: "SC: CONTOUR® Choice Program",
			upperContent: '\
					<div class="insider-padding">\
						<div class="insider-title-sc" style="text-align: center;">\
							With CONTOUR<sup>®</sup>NEXT Your Patients are Covered\
						</div>\
						<div class="insider-fig-bhm insider-fig-33-01 insider-margin-top-big"></div>\
						<div class="row responsive-pr insider-row insider-margin-top-bhm-r">\
							<div class="col-60">\
								<div class="insider-notice-sc-green insider-notice-med-r insider-margin-top-med-r"><p>Copay – Eligible privately insured patients can save up to $105** every month on their test strip copay.</p><p><span class="insider-bold-g">The more you test, the more you save.</span></p></div>\
							</div>\
							<div class="col-40">\
								<div class="insider-fig-33-02 insider-fig-med"></div>\
							</div>\
						</div>\
						<div class="insider-text insider-margin-top-small-m-r">Are your patients paying more than $15 a month on their CONTOUR<sup>®</sup>NEXT test strip copays? Now eligible patients shouldn’t have to with the CONTOUR<sup>®</sup> Choice card.</div>\
						<div class="insider-fig-33-03 insider-fig-mbm insider-margin-top-med"></div>\
						<div class="insider-text insider-margin-top-med">‡Savings example based on a prescription of 300 test strips or less.<br>Patient pays first $15, Contour<sup>®</sup> Choice Savings of $35.<br>Out-of-pocket expenses may be more based upon copay.</div>\
						<div class="row responsive-pr insider-row insider-margin-top-bhm">\
							<div class="col-60">\
								<div class="insider-notice-sc-green insider-notice-med-r insider-margin-top-med-r">Cash – Cash patients can save up to 50% with CONTOUR<sup>®</sup>NEXT test strips which are available at the lowest shelf-price of all national brands.*</div>\
							</div>\
							<div class="col-40">\
								<div class="insider-fig-33-04 insider-fig-med"></div>\
							</div>\
						</div>\
						<div class="insider-text insider-margin-top-small-m-r">Your patients can save up to 50% on CONTOUR<sup>®</sup>NEXT test strips, which are available at the lowest shelf-price of all national brands.*</div>\
						<div class="insider-fig-33-05 insider-fig-mbm insider-margin-top-med"></div>\
						<div class="insider-text insider-margin-top-med">†Patient pays the first $15, Ascensia pays $25.</div>\
						<div class="insider-text insider-margin-top-eno" style="font-size: 95%">\
							<p>*Average retail price per 50ct., IRI data, 52 week period ending 12/27/15. </p>\
							<p>**Limitations and Restrictions apply. Insured Patients: Eligible privately insured patients pay the first $15 of copay on prescription of 300 test strips or less, and this CONTOUR<sup>®</sup> Choice copay card (“card”) will cover up to $35 of remaining copay, when card is presented at participating retail pharmacies with a valid prescription for CONTOUR<sup>®</sup>NEXT test strips. For quantities over 300 test strips, additional patient contributions and card benefits increase accordingly – up to $45 and $105, respectively. Valid up to 12 uses through 12/31/2016. Patient responsible for complying with Plan rules for private insurance reimbursement and reporting savings, if required.</p>\
							<p>Cash Patients: Cash paying patients can receive savings up to $25 per month. Valid for up to 12 months of refills through 12/31/2016. Offer not valid on 25-count test strips.</p>\
							<p>For Insured and Cash Patients: Not eligible for government insurance programs (eg, Medicare/Medicaid). Void where prohibited. Limit one (1) card per patient. Card cannot be redeemed for cash or combined with other programs, coupons, or discounts. CONTOUR<sup>®</sup>NEXT reserves the right to cancel this program without notice. By using this offer, you are certifying that you meet the eligibility criteria and will comply with the terms and conditions described in the Restrictions section on the back of the card. For questions, call 1-855-226-3931.</p>\
						</div>\
					</div>',
			hasNavButtons: false,
			hasFooter: false
		}
	]
}


