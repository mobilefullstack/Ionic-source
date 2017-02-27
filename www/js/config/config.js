


var STRING_RESOURCES = {

	states: [
		"AL",
		"AK",
		"AZ",
		"AR",
		"CA",
		"CO",
		"CT",
		"DE",
		"DC",
		"FL",
		"GA",
		"HI",
		"ID",
		"IL",
		"IN",
		"IA",
		"KS",
		"KY",
		"LA",
		"ME",
		"MD",
		"MA",
		"MI",
		"MN",
		"MS",
		"MO",
		"MT",
		"NE",
		"NV",
		"NH",
		"NJ",
		"NM",
		"NY",
		"NC",
		"ND",
		"OH",
		"OK",
		"OR",
		"PA",
		"RI",
		"SC",
		"SD",
		"TN",
		"TX",
		"UT",
		"VT",
		"VA",
		"WA",
		"WV",
		"WI",
		"WY"
	],

	pharmacies: [
		"Other",
		"CVS",
		"Walgreens",
		"Rite-Aid",
		"Walmart",
		"Kroger",
		"Costco",
		"Sam's Club",
		"Target",
		"Health Mart",
		"Leader",
		"Good Neighbor Pharmacy",
		"HEB",
		"Albertson's",
		"Meijer",
		"Publix",
		"Price Chopper",
		"Thrifty White",
		"Non-Pharmacy"
	],

	pageNames: {
		"app.bookmarks": "Bookmarks",
		"app.dialog-scripts": "The DIALOGUE Scripts",
		"app.patient-materials": "Patient Materials",
		"app.solution-center": "Solution Center",
		"app.home": "Home",
		"app.dcp": "Dialogue - Diabetes Consult for Pharmacy",
		"app.dcp-tab": "Landing Page: Diabetes Consult for Pharmacy",
		"app.bgm-tab": "Landing Page: Blood Glucose Monitoring",
		"app.he-tab": "Landing Page: Healthy Eating",
		"app.pa-tab": "Landing Page: Physical Activity",
		"app.mtc-main": "Landing Page: Meter Training & Certification"
	},

	quizzes: [
		{
			id: "q00",
			quiz: "Accuracy is deﬁned as_________",
			type: 0,
			alert: "Accuracy is deﬁned as the closeness of a measured value to its true value."
		},
		{
			id: "q01",
			quiz: "Which of the following statements correctly describes precision?",
			type: 0,
			alert: "Precision represents the extent to which repeated measurements give the same results."
		},
		{
			id: "q02",
			quiz: "As per the ISO 15197:2013 accuracy standard, for glucose concentrations <100 mg/dL, 95% of results must fall within________ of the manufacturer's measurement procedure.",
			type: 0,
			alert: "The ISO 15197:2013 standard speciﬁes that for glucose concentrations <100 mg/dL, 95% of results must fall within ±15 mg/dL of the manufacturer's measurement procedure."
		},
		{
			id: "q03",
			quiz: "In Bayer’s CONTOUR<sup>®</sup>NEXT blood glucose monitoring (BGM) systems, how are test strip calibration codes communicated to the meter?",
			type: 0,
			alert: "The layout of the electrodes on any given test strip comprises the coding information for individual CONTOUR<sup>®</sup>NEXT test strips. Bayer's CONTOUR<sup>®</sup>NEXT portfolio of meters recognize this layout upon insertion of a test strip, and the appropriate calibration code is automatically selected."
		},
		{
			id: "q04",
			quiz: "Bayer's No Coding™ technology provides automatic calibration________. Select all that apply.",
			type: 1,
			alert: "In Bayer's No Coding™ technology, the layout of the electrodes comprises the coding information for individual CONTOUR<sup>®</sup>NEXT test strips. As with the CONTOUR<sup>®</sup> blood glucose monitoring (BGM) system, Bayer's CONTOUR<sup>®</sup>NEXT portfolio of meters recognize this layout upon insertion of a test strip, and the appropriate calibration code is automatically selected, meaning one less step in the testing process."
		},
		{
			id: "q05",
			quiz: "The CONTOUR<sup>®</sup>NEXT BGM system’s MULTIPULSE™ Accuracy Technology uses mathematical equations to correct the meter results from which of the following sources of error?",
			type: 0,
			alert: "The CONTOUR<sup>®</sup>NEXT BGM system advanced algorithm utilizes mathematical equations to correct the meter results by applying calculation sequences that correct the signal from various sources of error, including temperature, hematocrit, sensor variability, and user technique."
		},
		{
			id: "q06",
			quiz: "In which of the following groups did the key data show high accuracy? Select all that apply.",
			type: 1,
			alert: "In regard to the CONTOUR<sup>®</sup>NEXT blood glucose monitoring (BGM) System, the Parkes Error Grid Analysis (EGA) showed that, in the hands of trained operators, 100% of results fell within zone A. In the hands of patients, 99.5% of results fell within zone A and 0.5% fell within zone B. The CONTOUR<sup>®</sup>NEXT EZ meter showed 100% of results, both in the hands of trained operators and in the hands of patients, fell within zone A."
		},
		{
			id: "q07",
			quiz: "Parkes error grid analysis (EGA) classifies inaccurate blood glucose monitoring (BGM) system readings into_________ risk zones based on their clinical impact.",
			type: 0,
			alert: "Parkes EGA classifies BGM system readings into 5 zones based on their impact on the clinical decision to either treat or not to treat."
		},
		{
			id: "q08",
			quiz: "In the Parkes error grid analysis (EGA), a result in Zone A signifies which of the following?",
			type: 0,
			alert: "Zone A signifies that such a result would have no effect on clinical action. And a result in zone B signifies that it is one that may alter the clinical action, though with little to no effect on clinical outcome. Results in zones C, D, and E may alter clinical action, and are likely to affect the clinical outcome, could have significant medical risk, and could have dangerous consequences, respectively."
		},
		{
			id: "q09",
			quiz: "TRUE or FALSE? The Second-Chance™ sampling feature allows users to reapply blood to the same test strip in case of underfilling.",
			type: 0,
			alert: "The Second-Chance™ sampling feature of the CONTOUR<sup>®</sup>NEXT portfolio allows users to reapply blood to the same test strip in case of underfilling. The CONTOUR<sup>®</sup>NEXT blood glucose monitoring (BGM) systems delivered the same level of accuracy when the Second-Chance™ sampling feature was used."
		}
	],

	choices: [
		{
			id: "q00-0",
			text: "The extent that repeated measurements give the same results",
			value: 0
		},
		{
			id: "q00-1",
			text: "The closeness of a measured value to the true value",
			value: 1
		},
		{
			id: "q00-2",
			text: "The mean bias of repeated measurements",
			value: 0
		},
		{
			id: "q00-3",
			text: "All of the above",
			value: 0
		},
		{
			id: "q01-0",
			text: "Precision is very similar to accuracy.",
			value: 0
		},
		{
			id: "q01-1",
			text: "Precision is the closeness of an observed value to the true value.",
			value: 0
		},
		{
			id: "q01-2",
			text: "Precision is deﬁned as the mean bias of repeated measurements.",
			value: 0
		},
		{
			id: "q01-3",
			text: "Precision represents the extent to which repeated measurements give the same results.",
			value: 1
		},
		{
			id: "q02-0",
			text: "± 120%",
			value: 0
		},
		{
			id: "q02-1",
			text: "± 20 mg/dL",
			value: 0
		},
		{
			id: "q02-2",
			text: "± 15 mg/dL",
			value: 1
		},
		{
			id: "q02-3",
			text: "± 115 mg/dL",
			value: 0
		},
		{
			id: "q03-0",
			text: "Appropriate calibration is achieved by inserting a code chip that automatically transfers the code to the meter.",
			value: 0
		},
		{
			id: "q03-1",
			text: "With Bayer’s No Coding™ technology, the code is contained in the test strip electrode layout and recognized by the meter.",
			value: 1
		},
		{
			id: "q03-2",
			text: "Bayer’s CONTOUR<sup>®</sup>NEXT BGM systems require manual calibration.",
			value: 0
		},
		{
			id: "q04-0",
			text: "because the electrode layout comprises the calibration curve for individual test strips",
			value: 1
		},
		{
			id: "q04-1",
			text: "because the meter automatically applies the correct calibration curve upon code number insertion by the user ",
			value: 0
		},
		{
			id: "q04-2",
			text: "because the appropriate code for each test strip is automatically selected by the meter upon insertion of the test strip",
			value: 1
		},
		{
			id: "q04-3",
			text: "because a chip automatically transmits the calibration code to the meter ",
			value: 0
		},
		{
			id: "q05-0",
			text: "Temperature",
			value: 0
		},
		{
			id: "q05-1",
			text: "Hematocrit",
			value: 0
		},
		{
			id: "q05-2",
			text: "User technique",
			value: 0
		},
		{
			id: "q05-3",
			text: "All of the above",
			value: 1
		},
		{
			id: "q06-0",
			text: "Trained operators using CONTOUR<sup>®</sup>NEXT EZ ",
			value: 1
		},
		{
			id: "q06-1",
			text: "Patients using CONTOUR<sup>®</sup>NEXT EZ",
			value: 1
		},
		{
			id: "q06-2",
			text: "Patients using CONTOUR<sup>®</sup>NEXT",
			value: 1
		},
		{
			id: "q06-3",
			text: "Trained operators using CONTOUR<sup>®</sup>NEXT",
			value: 1
		},
		{
			id: "q07-0",
			text: "2",
			value: 0
		},
		{
			id: "q07-1",
			text: "4",
			value: 0
		},
		{
			id: "q07-2",
			text: "5",
			value: 1
		},
		{
			id: "q07-3",
			text: "10",
			value: 0
		},
		{
			id: "q08-0",
			text: "Such a result would have no effect on clinical action",
			value: 1
		},
		{
			id: "q08-1",
			text: "Such a result may alter the clinical action",
			value: 0
		},
		{
			id: "q08-2",
			text: "Such a result is likely to affect the clinical outcome",
			value: 0
		},
		{
			id: "q08-3",
			text: "Such a result could have dangerous consequences",
			value: 0
		},
		{
			id: "q09-0",
			text: "True",
			value: 1
		},
		{
			id: "q09-1",
			text: "False",
			value: 0
		}
	],

	home: {
		BPEP: "Pharmacy<br>Education Program",
		BPEP_content: "This multi-dimensional program is designed to help pharmacists, technicians and other pharmacy staff be key resources for their patients with diabetes. The program includes comprehensive diabetes information and learning tools, along with patient education materials.",
		program_content: "The Pharmacy Education program was designed to provide you with a solid resource for diabetes information, to help you provide better support to your patients. \
					<ul class='home-ul'> \
					<li><div>Meter Training & Certification:</div></li> \
					<li><div>The online, interactive portal provides in-depth scientific analysis of the Importance of Accuracy in a Blood Glucose Monitoring System, which details the proprietary strip technology and outlines the accuracy standards by ISO 15197:2013. The online portal also includes the CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT EZ meter demonstration videos, to help with your patients’ questions. Successful completion of the module offers Registered Pharmacists and PharmD professionals free* demonstration meters for use at their pharmacies.</div></li> \
					<li><div>Diabetes In Review:</div></li> \
					<li><div>This resource page is designed to provide consolidated online access to relevant topics in diabetes research through a selection of open access medical journal publications, in order to help you stay informed and help your patients with diabetes.</div></li> \
					<li><div>Dialogue - Diabetes Consult for Pharmacy:</div></li> \
					<li><div>This virtual binder provides diabetes information and helpful management tools to enhance patient-pharmacist interaction at the pharmacy counter on relevant diabetes topics, such as healthy eating, physical activity, and blood glucose monitoring.</div></li> \
					</ul><br> \
					<p>You can access the complete Dialogue program, as well as additional resources to help your patients with diabetes at: www.ContourNextPro.com/PharmEd </p><br> \
					<p class='home-ap-foot-note'>*Only Registered Pharmacists and PharmD professionals are eligible for sample product. While supplies last. </p>"
	},

	dcp: {
		DCP: "Dialogue - Diabetes Consult for Pharmacy",
		DCP_content: "<p>Diabetes information and helpful management tools to enhance patient-pharmacist interaction at the pharmacy counter on relevant diabetes topics.<p>\
					  <p>Included are brief patient consult manuscripts titled The DIALOGUE. The DIALOGUE manuscripts contain suggested engagement tips, background information, and recommendations to better inform your patients.</p>"
	},

	dcpTab: [
		{
			tabTitle: "Blood Glucose Monitoring",
			tabContent: "Ongoing patient self-management education and support are critical to preventing acute complications and reducing the risk of long-term complications in Patients With Diabetes."
		},
		{
			tabTitle: "Diabetes & Healthy Eating",
			tabContent: "One of the most important tools for controlling diabetes progression is the achievement and maintenance of healthy eating habits.",
		},
		{
			tabTitle: "Physical Activity",
			tabContent: "Regular exercise has been shown to improve blood glucose control, reduce cardiovascular risk factors, contribute to weight loss, and improve well-being",
		},
		{
			tabTitle: "Diabetes Background Basics",
			tabContent: "An overview of diabetes, how it affects the body and statistics about its impact."
		}
	],

	dcpSubTab: [
		"The DIALOGUE Talking Points",
		"Background Information",
		"Patient Education Materials",
		"Solution Center"
	],

	sc: {
		title: "Solution Center",
		content: "Quick links to free meter, RxBin codes, coupons and other offers for your patients."
	},

	ds: {
		title: "The DIALOGUE",
		subtitle: "Talking Points",
		content: "The DIALOGUE is provided as one page discussion scripts that include conversation topics to engage, educate and interact with each patient at the pharmacy counter, broken into approximately 2-minute consultations.",
		notice: "<p><span>New Fill</span> dialogues provide conversation points for newly diagnosed patients with diabetes.</p>\
			   <p><span>ReFill</span> dialogues provide conversation points for experienced patients with diabetes.</p>"
	},

	pm: {
		title: "Patient Materials",
		content: "Provides patients with helpful information on how to better manage their diabetes, introduces the key building blocks of good diabetes management and outlines the most recent ADA and AACE diabetes management goals.",
		pdfLinks: [
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Know-Your_Numbers_Participant_Guide.pdf", path: "www/pdf/Know-Your_Numbers_Participant_Guide.pdf", name: "Know Your Numbers"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Know-Your_Nutrition_Participant_Guide.pdf", path: "www/pdf/Know-Your_Nutrition_Participant_Guide.pdf", name: "Know Your Nutrition"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Know-Your_HealthySteps_Participant_Guide.pdf", path: "www/pdf/Know-Your_HealthySteps_Participant_Guide.pdf", name: "Know Your Healthy Steps"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Know-Your_HealthFacts_HeartDisease.pdf", path: "www/pdf/Know-Your_HealthFacts_HeartDisease.pdf", name: "Know Your Health Facts - Diabetes & Heart Disease"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Know-Your_HealthFacts_GestationalDiabetes.pdf", path: "www/pdf/Know-Your_HealthFacts_GestationalDiabetes.pdf", name: "Know Your Health Facts - Gestational Diabetes"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Know-Your_HealthFacts_Flu.pdf", path: "www/pdf/Know-Your_HealthFacts_Flu.pdf", name: "Know Your Health Facts - Flu Season"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Portfolio_Slim_Jim.pdf", path: "www/pdf/Portfolio_Slim_Jim.pdf", name: "Portfolio Slim Jim"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/CONTOURNEXT_EasyStart_Guide.pdf", path: "www/pdf/CONTOURNEXT_EasyStart_Guide.pdf", name: "CONTOUR<sup>®</sup>NEXT Easy Start Guide"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/Demo_Tear_Pad.pdf", path: "www/pdf/Demo_Tear_Pad.pdf", name: "Demo Tear Pad"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/patientmaterials/CONTOURNEXT_EZ_EasyStart_Guide.pdf", path: "www/pdf/CONTOURNEXT_EZ_EasyStart_Guide.pdf", name: "CONTOUR<sup>®</sup>NEXT EZ Easy Start Guide"},
			{link: "http://test.rsdmarketing.com/internal/pharmacyappdb/pdf/bayer_portfolioaccess.pdf", path: "www/pdf/bayer_portfolioaccess.pdf", name: "Product Coverage Information"}
		]
	},

	dr: {
		title: "Diabetes <span>InReview</span>",
		content: "This page provides access to relevant articles and medical journals in order to help you stay informed on the latest diabetes guidelines and research. This virtual library is designed to support you in helping your patients with diabetes.",
		articles:[
			"Fully integrated artificial pancreas in type 1 diabetes: modular closed-loop glucose control maintains near normoglycemia",
			"Feasibility of outpatient fully integrated closed-loop control: first studies of wearable artificial pancreas",
			"Closed-loop basal insulin delivery over 36 hours in adolescents with type 1 diabetes: randomized clinical trial",
			"Dietary fat acutely increases glucose concentrations and insulin requirements in patients with type 1 diabetes: implications for carbohydrate-based bolus dose calculation and intensive diabetes manage",
			"Clinic–integrated behavioral intervention for families of youth with type 1 diabetes: randomized clinical trial",
			"Treatment of patients with type 2 diabetes with exenatide once weekly versus oral glucose-lowering medications or insulin glargine: achievement of glycemic and cardiovascular goals",
			"Comparison of efficacy between incretin-based therapies for type 2 diabetes mellitus",
			"Novel and emerging diabetes mellitus drug therapies for the type 2 diabetes patient",
			"Changing physical activity behavior in type 2 diabetes: a systematic review and meta-analysis of behavioral interventions",
			"The effects of aerobic, resistance, and combined exercise on metabolic control, inflammatory markers, adipocytokines, and muscle insulin signaling in patients with type 2 diabetes mellitus",
			"The relative contribution of prepregnancy overweight and obesity, gestational weight gain, and IADPSG-defined gestational diabetes mellitus to fetal overgrowth",
			"Effects of treatment in women with gestational diabetes mellitus: systematic review and meta-analysis",
			"Primary prevention of gestational diabetes mellitus and large-for-gestational-age newborns by lifestyle counseling: a cluster randomized controlled trial",
			"Metformin versus insulin for the treatment of gestational diabetes",
			"Pre-diabetes and the risk for cardiovascular disease: a systematic review of the evidence",
			"Dysfunctional adiposity and the risk of prediabetes and type 2 diabetes in obese adults",
			"Relationship between obesity and diabetes in a US adult population: findings from the National Health and Nutrition Examination Survey, 1999–2006",
			"Mechanisms for insulin resistance: common threads and missing links",
			"HLA class I and genetic susceptibility to type 1 diabetes: results from the type 1 diabetes genetics consortium",
			"Genome-wide association analysis of autoantibody positivity in type 1 diabetes cases",
			"Large-scale association analysis provides insights into the genetic architecture and pathophysiology of type 2 diabetes",
			"Systematic identification of interaction effects between genome- and environment-wide associations in type 2 diabetes mellitus",
			"Moving to an A1C-based diagnosis of diabetes has a different impact on prevalence in different ethnic groups",
			"International Association of Diabetes and Pregnancy Study Groups recommendations on the diagnosis and classification of hyperglycemia in pregnancy",
			"A1C versus glucose testing: a comparison",
			"Guidelines and recommendations for laboratory analysis in the diagnosis and management of diabetes mellitus",
			"Improved lifestyle and decreased diabetes risk over 13 years: long-term follow-up of the randomised Finnish Diabetes Prevention Study (DPS)",
			"Novel and emerging diabetes mellitus drug therapies for the type 2 diabetes patient",
			"Health-related quality of life in diabetes: The associations of complications with EQ-5D scores",
			"Effectiveness of lifestyle interventions for individuals with severe obesity and type 2 diabetes: results from the Look A HEAD trial",
			"American Diabetes Association. Standards of medical care in diabetes 2014"
		],
		mainLink: "http://www.contournextpro.com/Resources-(1)/Pharmacy-Education/Diabetes-In-Review",
		links:[
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3425406/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3687268/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3609499/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3609492/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3313642/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3622579/",
			"http://www.biomedcentral.com/1741-7015/10/152",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4058735/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3507564/",
			"http://www.metabolismjournal.com/article/S0026-0495(11)00018-7/abstract",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3526206/",
			"http://www.bmj.com/content/340/bmj.c1395",
			"http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1001036",
			"http://www.nejm.org/doi/full/10.1056/NEJMoa0707193",
			"http://www.sciencedirect.com/science/article/pii/S0735109710002792",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3556508/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3040808/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3294420/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2963558/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150451/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3442244/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3625410/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2827511/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2827530/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3024379/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3114322/",
			"http://link.springer.com/article/10.1007%2Fs00125-012-2752-5",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4058735/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2829531/",
			"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3177753/",
			"http://care.diabetesjournals.org/content/37/Supplement_1/S14.long"
		]
	},

	mtc: {
		title: "Meter Training & Certification",
		content: "<span style='font-weight: bold; -webkit-text-stroke: 0px;'>The Meter Training</span> and Certification features product demonstration videos and an <span style='font-weight: bold; -webkit-text-stroke: 0px;'>Importance of Accuracy</span> training session. The videos and training session illustrate how the meters work and how the proven accuracy of Bayer test strips and meters combined will help support your patients with diabetes.",
		comment: "<p>Please log in or register to keep track of your progress through the Bayer Meter Training & Certification modules. You must be logged in before viewing the modules in order to achieve your Bayer Certificate of Completion.</p>\
			<p>And you could also qualify for a <span style='font-weight: bold; font-style: italic;'>FREE* CONTOUR<sup>®</sup>NEXT Demo Meter!</span></p>",
		note: "<p>Only Registered Pharmacists and PharmD professionals are eligible for sample product. While supplies last.</p>\
			<p>NOTE: Bayer certification is not an MCE accredited program.</p>"
	},

	mtcr: {
		title: "Demo Meter Request"
	},

	mtcMain: {
		title: "Meter Training",
		content: "<span class='mtc-bold'>The Meter Training</span> features product demonstration videos and an <span class='mtc-bold'>Importance of Accuracy</span> training session. The videos and training session illustrate how the meters work and how the proven accuracy of CONTOUR<sup>®</sup>NEXT test strips and meters combined will help support your patients with diabetes.",
		comment: "<p>Meter demonstration videos are included for CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT EZ meters to help with your patients' questions.</p>\
			    <p>The <span class='mtc-bold mtc-italic'>Importance of Accuracy</span> training session details the accuracy standards set by ISO 15197:2013, along with proprietary strip technology and qualifying process.</p>\
			    <p>For Meter Certification and an opportunity to receive free demonstration meters for your pharmacy: Visit and login to our ContourNextPro site at www.ContourNextPro.com/MTC</p>\
			    <p><span class='mtc-italic' style='font-size: 90%;'>*Please access on your computer</span></p>",
		transcript: [
			"1. Introduction<br>\
			<br>\
			Some pages in this training session contain audio.<br>\
			Please ensure your volume is adjusted to a comfortable level.<br>\
			<br>\
			Other pages allow you to explore the content at your own pace and do not contain audio.<br>\
			<br>\
			Welcome to the <span class='mtc-bold'>Importance of Accuracy</span> Training Session.<br>\
			<br>\
			This training session is designed to introduce you to the importance of accuracy in blood glucose monitoring (BGM) systems.<br>\
			<br>\
			At the end of this training session, you will be able to discuss various factors that can affect BGM systems' performance (accuracy and precision) and the impact of these various factors on clinical decisions.<br>\
			<br>\
			This training session is designed to introduce you to the importance of accuracy in BGM systems. The session begins by explaining what accuracy is and how international standards define minimal accuracy requirements for BGM systems.<br>\
			<br>\
			You will then learn about several factors that can affect accuracy in BGM systems.<br>\
			<br>\
			Finally, the appropriate way of comparing the accuracy of different BGM systems will be discussed.<br>\
			<br>\
			Upon completion of this training session, you will be able to:<br>\
			<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>Define accuracy and recall the accuracy requirements of the ISO 15197: 2013 accuracy standard, as it relates to optimal BGM performance.</li>\
				<li>Describe underfilling and the CONTOUR<sup>®</sup>NEXT portfolio's Second-Chance™ sampling feature.</li>\
				<li>Describe calibration, coding, and Bayer's No Coding™ technology.</li>\
				<li>Describe how MULTIPULSE™ Accuracy Technology minimizes various sources of errors, including cross-reactivity, substance interference, and hematocrit.</li>\
				<li>Recognize the proven accuracy through analysis of key data of the CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT EZ BGM systems.</li>\
			</ul>\
			<br>\
			<span class='mtc-bold'>Accuracy</span> is defined as the closeness of a measured value to its true value, whereas <span class='mtc-bold'>precision</span> represents the extent to which repeated measurements give the same results.<br>\
			<br>\
			The accuracy of BGM systems—the closeness of the measured glucose concentration to the true glucose concentration—is determined by comparing the results of a BGM system to those obtained by an analytical method known as <span class='mtc-bold'>mass spectrometry</span>. Mass spectrometry is considered the gold standard for measuring the true glucose concentration in a sample. However, given that the method is costly, BGM system manufacturers often use <span class='mtc-bold'>enzyme</span>-based reference methods, such as the <span class='mtc-bold'>Yellow Springs Instruments (YSI)</span> 2300 STAT Plus™ Glucose Analyzer, which utilizes a <span class='mtc-bold'>glucose oxidase (GO)</span>- based methodology and is calibrated against mass spectrometry.<br>\
			",

			"2. Accuracy<br>\
			<br>\
			Bayer continues its legacy of ease of use and accuracy with innovation that takes BGM systems to the NEXT level.<br>\
			<br>\
			In the following sections, you will learn more about accuracy and international standards that dictate the minimum accuracy requirements for BGM systems.<br>\
			<br>\
			Accuracy is defined as the closeness of a measured value to its true value, whereas precision represents the extent to which repeated measurements give the same results.<br>\
			<br>\
			Many factors can influence the accuracy of BGM systems. Some are system-dependent, while others are user-dependent. You will learn more about these factors and how the features of the CONTOUR<sup>®</sup>NEXT portfolio support ease of use and accuracy.<br>\
			<br>\
			Underfilling, or the use of an insufficient volume of a blood sample on a test strip, may affect the accuracy of BGM systems, even in those that automatically detect if there is not enough blood on the test strip to run the analysis.<br>\
			<br>\
			The Second-Chance™ sampling feature of the CONTOUR<sup>®</sup>NEXT portfolio allows users to reapply blood to the same test strip in case of underfilling. The BGM systems in the CONTOUR<sup>®</sup>NEXT portfolio automatically detect if there is not enough blood on the test strip to run the analysis, and prompts the user to apply more blood. The reapplication of blood, in cases where there is an insufficient first blood drop, may also affect the accuracy of the results. CONTOUR<sup>®</sup>NEXT BGM systems were demonstrated to deliver the same level of accuracy when reapplying blood as when applying a sufficient first blood drop.<br>\
			<br>\
			As a response to inaccuracies caused by interfering substances, cross-reactivity, and hematocrit, the CONTOUR<sup>®</sup>NEXT BGM Systems employ MULTIPULSE™ accuracy technology.<br>\
			<br>\
			This technology combines the <span class='mtc-bold'>glucose dehydrogenase-flavin-adenine dinucleotide (GDH-FAD)</span> enzyme, a proprietary <span class='mtc-bold'>mediator, gated amperometry</span>, and an advanced algorithm, which together contribute to the high accuracy and performance of the system.<br>\
			<br>\
			This technology uses advanced mathematical equations to correct the meter results by applying calculation sequences that correct the signal from various sources of error, including temperature, hematocrit, sensor variability, and user technique.<br>\
			",

			"3. Calibration<br>\
			<br>\
			BGM systems rely on chemicals (enzymes and mediators) deposited on test strips. The way the chemicals on test strips react can vary due to differences between batches of raw ingredients and other manufacturing variables. Variations in test strip reactivity between manufactured lots are measured so the best calibration curve for each lot can be established.<br>\
			<br>\
			Calibration, or <span class='mtc-bold'>coding</span>, of the BGM system is the process by which the best calibration curve for a given test strip lot is communicated to the meter.<br>\
			<br>\
			BGM systems may be calibrated in 2 ways:<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>Manual calibration</li>\
				<li>Automatic calibration</li>\
			</ul>\
			<br>\
			Test strips are first factory calibrated: blood samples are spiked with different glucose concentrations, and these samples are then analyzed using both test strips and a reference method, such as YSI. The test strip responses are plotted against the reference glucose value, and the resulting calibration curve is assigned to the lot of test strips by using an identifying code. Manual calibration occurs when a meter's parameters are matched to the test strip lot by the end user. This is done either by entering a calibration code, which can be a number found on the test strip packaging, or by inserting a code chip provided with the test strips that contains the calibration code.<br>\
			<br>\
			This procedure must be repeated by the end user with each new lot of test strips, and failure to do so may result in inaccurate blood glucose readings.<br>\
			<br>\
			Automatic calibration can be achieved by manufacturing test strips to a single calibration code, thereby eliminating the need for manual coding. Each test strip lot is tested at different glucose concentrations against a reference method, and only the test strips matching one predefined curve are accepted; all other test strips are discarded. Automatic calibration is also possible by manufacturing test strips that contain the appropriate identifiers for calibration codes utilized by the meter, which is the basis of Bayer's No Coding™ Technology discussed in the next section.<br>\
			<br>\
			Bayer pioneered No Coding™ technology, which automatically removes any reliance on users to correctly calibrate their meters. The layout of the electrodes comprises the calibration code information for individual CONTOUR<sup>®</sup>NEXT test strips.<br>\
			<br>\
			Bayer's CONTOUR<sup>®</sup>NEXT portfolio of meters recognize this layout upon insertion of a CONTOUR<sup>®</sup>NEXT test strip, and the appropriate calibration code is automatically selected, meaning one less step in the testing process.<br>\
			<br>\
			Bayer's No Coding™ technology eliminates inaccurate BGM system readings due to user miscoding. End users can confidently use any CONTOUR<sup>®</sup>NEXT test strip package—one at home and one at work, for instance—regardless of the lot numbers.<br>\
			",

			"4. Test Strip Chemistry<br>\
			<br>\
			The next section will explore system-dependent errors that can affect accuracy.<br>\
			<br>\
			All current electrochemical BGM systems utilize an enzyme on the test strip to facilitate the reaction between glucose and a mediator that acts to deliver electrons to the electrode. <br>\
			<br>\
			The basic steps of electrochemical glucose measurement are the following: <br>\
			<br>\
			The enzyme glucose dehydrogenase (GDH) facilitates the transfer of electrons from glucose to the enzyme cofactor, flavin-adenine dinucleotide (FAD).<br>\
			<br>\
			Glucose is now oxidized—it lost electrons—while FAD has been reduced—it gained electrons.<br>\
			<br>\
			Electrons are then transferred from FAD to the mediator. FAD is oxidized back while the mediator is reduced.<br>\
			<br>\
			Finally, an electric potential is applied to the electrode, drawing electrons from the reduced mediator into the electrode.<br>\
			<br>\
			These electrons generate a current that is measured by the blood glucose meter and converted into a glucose concentration.<br>\
			<br>\
			The CONTOUR<sup>®</sup>NEXT test strips utilize the GDH-FAD enzyme in combination with a proprietary mediator. This proprietary mediator contributes to the high accuracy of the CONTOUR<sup>®</sup>NEXT BGM system. <br>\
			<br>\
			<span class='mtc-bold'>Cross-reactivity</span> and <span class='mtc-bold'>interference</span> are 2 terms used by Bayer to refer to substances that can affect accuracy in a BGM system.<br>\
			<br>\
			<span class='mtc-italic'>Cross-reactivity</span> refers to reactions between the enzyme on the test strip and non-glucose sugars that might be present in the blood sample. Certain BGM systems can react to these other sugars, thereby reporting a falsely elevated glucose value.<br>\
			<br>\
			Interference refers to substances that can affect the electrochemical reaction on the test strip. Substances that can donate or receive electrons can react with the mediator and alter the strength of the signal that the meter records.<br>\
			<br>\
			The enzymes used in glucose test strips cross-react with non-glucose sugars to varying degrees, which can affect the signal received by the meter. In addition, there are factors such as metabolites, drugs, and oxidizing agents that can interfere with the electrochemical reaction at the level of the electrode and affect the signal. These are referred to as <span class='mtc-italic'>interfering substances</span>. Both of these can result in inaccurate BGM system readings.<br>\
			<br>\
			It should be noted that the US Food and Drug Administration (FDA) uses interference as a blanket term for both \"cross-reactivity\" and \"interfering substances.\" For instance, a warning letter on a specific glucose monitoring technology issued by the FDA in 2009 refers to \"maltose interference\" rather than \"maltose cross-reactivity.\"<br>\
			",

			"5. Accuracy: Closing the Gap<br>\
			<br>\
			In this section, we will explain the proven accuracy of the CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT EZ BGM systems through analysis of key data as it relates to ISO 15197:2013 and the Parkes <span class='mtc-bold'>Error Grid Analysis (EGA)</span>. <br>\
			<br>\
			According to the American Diabetes Association (ADA), patients with diabetes should play an active role in the management of their disease. The ADA recommends self-monitoring of blood glucose (SMBG) as a component of effective diabetes management. Therefore, accuracy of BGM systems is important because it ensures that patients make decisions based on reliable information to manage their disease safely and effectively.<br>\
			<br>\
			With high accuracy and ease of use, Bayer's CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT EZ BGM systems help close the gap in accuracy between results obtained by trained operators and those obtained by people with diabetes.<br>\
			<br>\
			In clinical trials of fingerstick capillary blood, the CONTOUR<sup>®</sup>NEXT and the CONTOUR<sup>®</sup>NEXT EZ BGM systems were shown to meet the ISO 15197:2013 standard accuracy requirements, both in the hands of trained operators and in the hands of patients.<br>\
			<br>\
			The ISO 15197:2013 standard accuracy requirements state that 95% of results with a BGM system must fall within ±15 mg/dL at glucose concentrations <100 mg/dL and within ±15% at glucose concentrations ≥ 100 mg/dL. The standard also requires that 99% of individual glucose measured values fall within zones A and B of the Consensus Error Grid.<br>\
			<br>\
			This slide shows the accuracy evaluation of the CONTOUR<sup>®</sup>NEXT BGM system. The boxes highlighted in yellow represent the current ISO accuracy criteria. Of results below 100 mg/dL, 100% fall within plus/minus 15 mg/dL of YSI, both in the hands of trained operators and in the hands of patients. For results equal to or above 100 mg/dL, 99.8% in the hands of trained operators and 98.9% in the hands of patients fall within plus/minus 15% of YSI.<br>\
			<br>\
			This slide shows the accuracy evaluation of the CONTOUR<sup>®</sup>NEXT EZ BGM system. The boxes highlighted in yellow represent the current ISO accuracy criteria. Of results below 100 mg/dL, 100% fall within plus/minus 15 mg/dL of YSI, both in the hands of trained operators and in the hands of patients. For results equal to or above 100 mg/dL, 100% in the hands of trained operators and 98.8% in the hands of patients fall within plus/minus 15% of YSI.<br>\
			<br>\
			The Parkes EGA demonstrates the clinical impact of accuracy.<br>\
			<br>\
			Zone A signifies that such a result would have no effect on clinical action. And a result in zone B signifies that it is one that may alter the clinical action, though with little to no effect on clinical outcome. Results in zones C, D, and E may alter clinical action, and are likely to affect the clinical outcome, could have significant medical risk, and could have dangerous consequences, respectively.<br>\
			<br>\
			A lot of factors affecting BGM systems' accuracy have now been covered. You have learned that calibration, test strip chemistry, cross-reactivity, and interfering substances may affect BGM systems' accuracy. However, assessments of accuracy of BGM systems do not take into account the clinical relevance of measurement error. Error grid analysis (EGA) was developed to assess the clinical significance of inaccurate BGM system readings compared with reference laboratory readings. EGA classifies inaccurate BGM system readings into 5 zones based on their impact on the clinical decision to either treat or not treat.<br>\
			<br>\
			There are 2 types of EGA currently used: <br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>Clarke EGA, developed in 1987</li>\
				<li>Parkes EGA, published in 2000 </li>\
			</ul>\
			<br>\
			The EGA developed by William L. Clarke and coworkers is based on 4 clinical assumptions: <br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>The target glucose range is between 70 and 180 mg/dl.</li>\
				<li>Patients will only attempt to correct off-target values.</li>\
				<li>Treatment is inappropriate if it will result in off-target blood glucose values.</li>\
				<li>Failure to treat blood glucose values <70 or >240 mg/dL is inappropriate.</li>\
			</ul>\
			<br>\
			In the Clarke EGA, values obtained from a BGM system are plotted against corresponding values obtained from reference laboratory methods. A perfect agreement between both sets of values is represented by a diagonal line.<br>\
			<br>\
			Based on the aforementioned assumptions, the grid is divided into 5 zones of accuracy:<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>Zone A: The results are with in ±20% of the reference method, or are <70 mg/dL.</li>\
				<li>Zone B: The results differ from the reference method by >20%, but would not involve a change in therapy or be the basis of a harmful treatment.</li>\
				<li>Zone C: The results would lead to initiating a therapy that would overcorrect acceptable glucose concentrations.</li>\
				<li>Zone D: The results fail to detect and treat unacceptable glucose concentrations.</li>\
				<li>Zone E: The results would cause erroneous treatment.</li>\
			</ul>\
			<br>\
			To sum up, zones A and B represent clinically acceptable values, whereas results falling in zones C, D, and E are potentially dangerous, and thus are clinically significant inaccuracies.<br>\
			<br>\
			Although the Clarke EGA, developed in 1987, was a useful tool for assessing clinical relevance of accuracy, it has been criticized on the placement of its risk boundaries because some of these boundaries skip risk categories. In an effort to address this issue, Joan L. Parkes and coworkers developed an updated EGA.<br>\
			<br>\
			The Parkes EGA, also known as the <span class='mtc-italic'>consensus EGA</span>, is based on the Clarke EGA, but involved the consensus of a large panel of physicians who were asked to assign BGM systems inaccuracies to 1 of 5 risk categories. The use of 5 risk zones was intended to match Clarke's structure, while allowing some flexibility for physicians to redefine the placement of risk boundaries by using new definitions. These definitions are:<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>Zone A: No effect on clinical action</li>\
				<li>Zone B: Altered clinical action with little or no effect on clinical outcome</li>\
				<li>Zone C: Altered clinical action</li>\
				<li>Zone D: Altered clinical action with possibly significant medical risks</li>\
				<li>Zone E: Altered clinical action with possibly dangerous consequences</li>\
			</ul>\
			<br>\
			The Parkes EGA naturally has no discontinuities in risk zones, whereas several boundaries did separate non-adjacent risk zones in the Clarke EGA. For instance, in the Clarke EGA, a blood glucose measurement of 200 mg/dL would be considered zone C if its reference value was 71 mg/dL, but would be considered zone E if its reference value was 69 mg/dL, thus skipping zone D.<br>\
			<br>\
			By its intrinsic design, the Parkes EGA is tailored to diabetes experts' opinions, and has been widely referenced in analyses and publications, including the ISO 15197:2013 standard discussed earlier.<br>\
			<br>\
			Error grid analysis of the CONTOUR<sup>®</sup>NEXT BGM system demonstrated that, in the hands of trained operators, 100% of measured glucose values fell within zone A. In the hands of patients, 99.5% of results fell within zone A and 0.5% fell within zone B.<br>\
			<br>\
			In an analysis of the CONTOUR<sup>®</sup>NEXT EZ BGM system, 100% of results in the hands of trained operators and in the hands of patients fell within zone A.<br>\
			<br>\
			You have completed the <span class='mtc-bold'>Importance of Accuracy</span> training. The following slides are a summary of the program to review.<br>\
			<br>\
			<span class='mtc-bold'>Define accuracy and recall the accuracy requirements of the ISO 15197: 2013 accuracy standard, as it relates to optimal BGM performance</span><br>\
			<br>\
			The accuracy of blood glucose monitoring (BGM) systems is important to ensure decisions are based on reliable information:<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li><span class='mtc-italic'>Accuracy</span> is the closeness of a measured value to the true value.</li>\
			</ul>\
			<br>\
			The ISO 15197:2013 accuracy standard:<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>For concentrations <100 mg/dL, 95% of results must fall within ±15 mg/dL of the manufacturer's measurement procedure.</li>\
				<li>For concentrations ≥100 mg/dL, 95% of results must fall within ±15% of the manufacturer's measurement procedure.</li>\
				<li>99% of individual glucose measured values shall fall within zones A and B of the Consensus Error Grid.</li>\
			</ul>\
			<br>\
			<span class='mtc-bold'>Describe underfilling and the CONTOUR<sup>®</sup>NEXT portfolio's Second-Chance™ sampling feature</span><br>\
			<br>\
			Underfilling, or the use of an insufficient volume of a blood sample for a test strip, may affect the accuracy of BGM systems.<br>\
			<br>\
			The Second-Chance™ sampling feature of the CONTOUR<sup>®</sup>NEXT portfolio allows users to reapply blood to the same test strip in case of underfilling.<br>\
			<br>\
			Blood sample reapplication may affect the accuracy of BGM systems, but the CONTOUR<sup>®</sup>NEXT BGM systems were demonstrated to deliver the same level of accuracy when reapplying blood as when applying a sufficient first blood drop.<br>\
			<br>\
			<span class='mtc-bold'>Describe calibration, coding, and Bayer's No Coding™ technology</span><br>\
			<br>\
			Calibration, or coding, informs the meter of the appropriate calibration curve for a given test strip lot.<br>\
			<br>\
			There are 2 ways to calibrate:<br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>Manual calibration: Relies on the end user</li>\
				<li>Automatic calibration: Does not rely on users</li>\
			</ul>\
			<br>\
			Bayer's No Coding™ technology provides automatic calibration. The meter automatically detects the calibration code that the electrode layout of any test strip comprises.<br>\
			<br>\
			<span class='mtc-bold'>Describe how MULTIPULSE™ Accuracy Technology minimizes various sources of errors, including crossreactivity, substance interference, and hematocrit</span><br>\
			<br>\
			The MULTIPULSE™ accuracy technology contributes to the high accuracy and performance of the CONTOUR<sup>®</sup>NEXT Blood Glucose Monitoring Systems by combining: <br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>glucose dehydrogenase-flavin-adenine dinucleotide (GDH-FAD) enzyme</li>\
				<li>a proprietary mediator</li>\
				<li>gated amperometry</li>\
				<li>advanced algorithm</li>\
			</ul>\
			<br>\
			The advanced algorithm corrects for various sources of error: <br>\
			<ul style='list-style: disc; padding-left: 2em;'>\
				<li>temperature</li>\
				<li>hematocrit</li>\
				<li>sensor variability</li>\
				<li>user technique</li>\
			</ul>\
			<br>\
			<span class='mtc-bold'>Recognize the proven accuracy through analysis of key data of the CONTOUR<sup>®</sup>NEXT and CONTOUR<sup>®</sup>NEXT EZ BGM systems</span><br>\
			<br>\
			The CONTOUR<sup>®</sup>NEXT and the CONTOUR<sup>®</sup>NEXT EZ Blood Glucose Monitoring systems were shown to meet the ISO 15197:2013 standard accuracy requirements for both low and high glucose concentrations.<br>\
			<br>\
			Over 99% of the measured glucose values fell within Zone A of the Parkes EGA, which indicates the high accuracy of the CONTOUR<sup>®</sup>NEXT and the CONTOUR<sup>®</sup>NEXT EZ Blood Glucose Monitoring systems, both in the hands of operators and in the hands of patients<br>\
			",

			"<span class='mtc-bold'>accuracy</span><br>\
			The closeness of a measured value to its true value.<br>\
			<br>\
			<span class='mtc-bold'>coding</span><br>\
			For blood glucose monitoring systems, the process by which the best calibration curve for a given test strip lot is communicated to the meter. Also called calibration.<br>\
			<br>\
			<span class='mtc-bold'>cross-reactivity</span><br>\
			Reactions with non-glucose sugars by the enzyme on the test strip.<br>\
			<br>\
			<span class='mtc-bold'>enzyme</span><br>\
			A protein whose function is to catalyze, or facilitate, biochemical reactions. In addition to their protein part, called the <span class='mtc-italic'>apoenzyme</span>, enzymes may also have a non-protein part called a <span class='mtc-italic'>cofactor</span>, or <span class='mtc-italic'>coenzyme</span>. Together, the apoenzyme and the cofactor form the active enzyme, or <span class='mtc-italic'>holoenzyme</span>.<br>\
			<br>\
			<span class='mtc-bold'>Error Grid Analysis (EGA)</span><br>\
			A type of analysis developed to assess the clinical significance of inaccurate blood glucose monitoring system readings. It classifies inaccurate blood glucose monitoring system readings into 5 zones (A to E) based on their impact on the clinical decision to either treat or not treat.<br>\
			<br>\
			<span class='mtc-bold'>gated amperometry</span><br>\
			A technique by which a blood glucose monitoring system applies a potential in pulsing patterns and measures the resulting current to estimate glucose concentration. Gated amperometry provides more information about the dynamics of the reaction than can be obtained with a simple amperometric test, in which a single period of potential is applied and a single current value is measured.<br>\
			<br>\
			<span class='mtc-bold'>glucose dehydrogenase-flavinadenine dinucleotide (GDH-FAD)</span><br>\
			An enzyme that catalyzes the transfer of electrons from a glucose molecule to an acceptor molecule. Glucose dehydrogenase oxidizes glucose while reducing the cofactor that acts as the acceptor molecule. The cofactor is a flavoprotein enzyme that serves as an electron carrier by participating in redox reactions.<br>\
			<br>\
			<span class='mtc-bold'>glucose oxidase (GO)</span><br>\
			An enzyme that oxidizes glucose into gluconolactone, using oxygen molecules.<br>\
			<br>\
			<span class='mtc-bold'>hematocrit</span><br>\
			The proportion of the volume of blood that is composed of red cells, usually measured as a percentage.<br>\
			<br>\
			<span class='mtc-bold'>interference</span><br>\
			Substances that can affect the electrochemical reaction on the test strip. Numerous drugs that act as reducing agents can react with the mediator and alter the strength of the signal that the meter records.<br>\
			<br>\
			<span class='mtc-bold'>mass spectrometry</span><br>\
			An analytical method used to detect isotopic ratios and molecular structures, based on the mass-to-charge ratio of ions.<br>\
			<br>\
			<span class='mtc-bold'>mediator</span><br>\
			A small chemical that may exist in both oxidized and reduced forms, usually able to quickly donate or receive electrons. In blood glucose monitoring systems, the mediator receives electrons from the enzyme and transfers them to the electrode.<br>\
			<br>\
			<span class='mtc-bold'>precision</span><br>\
			The extent that repeated measurements give the same results.<br>\
			<br>\
			<span class='mtc-bold'>pyrroloquinoline quinone (PQQ)</span><br>\
			A cofactor of enzymes, which serves as an electron carrier by participating in redox reactions.<br>\
			<br>\
			<span class='mtc-bold'>Yellow Springs Instruments (YSI)</span><br>\
			A company that manufactures a glucose analyzer commonly used as an accepted reference standard.<br>\
			"
		],
		videoNames: [
			"CONTOUR<sup>®</sup>NEXT Meter Training Video",
			"CONTOUR<sup>®</sup>NEXT EZ Meter Training Video",
			"Introduction",
			"Accuracy",
			"Calibration",
			"Test Strip Chemistry",
			"Accuracy: Closing the Gap"
		],
		videoLinks: [
			"http://test.rsdmarketing.com/internal/pharmacyappdb/1.mp4",
			"http://test.rsdmarketing.com/internal/pharmacyappdb/2.mp4",
			"http://test.rsdmarketing.com/internal/pharmacyappdb/appvideos/Introduction.mp4",
			"http://test.rsdmarketing.com/internal/pharmacyappdb/appvideos/Accuracy.mp4",
			"http://test.rsdmarketing.com/internal/pharmacyappdb/appvideos/Calibration.mp4",
			"http://test.rsdmarketing.com/internal/pharmacyappdb/appvideos/Test_Strip_Chemistry.mp4",
			"http://test.rsdmarketing.com/internal/pharmacyappdb/appvideos/Accuracy_Closing_the_Gap.mp4"
		]
	},

	mtcQuizIntro: {
		title: "Bayer Meter Training & Certification Quiz",
		content: "Having completed the Importance of Accuracy training session, you are now required to complete a 10-question final assessment. You will have 2 attempts at each question, and must achieve a score of 80% to pass the assessment. If you do not achieve the passing score after the first attempt, you will be given a second attempt to complete the entire assessment.",
		comment: "<p>There is no time limit.</p><p>If you experience difficulties with this module, please contact C3i.</p>"
	},

	bookmarks: {
		title: "Bookmarks",
		content: {
			"app.bgm-tab": [
				{
					title: "Blood Glucose Monitoring",
					subtitle: "Talking Points",
					comment: "Talking points to help educate patients about blood glucose monitoring and diabetes, broken into approximately 2-minute consultations."
				},
				{
					title: "Blood Glucose Monitoring",
					subtitle: "Background Information",
					comment: "Detailed information on the importance of blood glucose monitoring to assist you in helping patients manage their diabetes."
				},
				{
					title: "Blood Glucose Monitoring",
					subtitle: "Patient Materials",
					comment: "Various topic-related consumer information pieces that you can share with patients."
				}
			],

			"app.he-tab": [
				{
					title: "Healthy Eating",
					subtitle: "Talking Points",
					comment: "Talking points to help educate patients about healthy eating and diabetes, broken into approximately 2-minute consultations."
				},
				{
					title: "Healthy Eating",
					subtitle: "Background Information",
					comment: "Detailed information on the importance of healthy eating to assist you in helping patients manage their diabetes."
				},
				{
					title: "Healthy Eating",
					subtitle: "Patient Materials",
					comment: "Various topic-related consumer information pieces that you can share with patients."
				}
			],

			"app.pa-tab": [
				{
					title: "Physical Activity",
					subtitle: "Talking Points",
					comment: "Talking points to help educate patients about physical activity and diabetes, broken into approximately 2-minute consultations."
				},
				{
					title: "Physical Activity",
					subtitle: "Background Information",
					comment: "Detailed information on the importance of physical activity to assist you in helping patients manage their diabetes."
				},
				{
					title: "Physical Activity",
					subtitle: "Patient Materials",
					comment: "Various topic-related consumer information pieces that you can share with patients."
				}
			],

			"insider-0": {
				title: "Blood Glucose Monitoring",
				subtitle: "Talking Points",
				comment: "NEW FILL (ORAL/INSULIN/TEST STRIPS)"
			},

			"insider-1": {
				title: "Blood Glucose Monitoring",
				subtitle: "Talking Points",
				comment: "REFILL (ORAL/INSULIN/TEST STRIPS)"
			},

			"insider-2": {
				title: "Healthy Eating",
				subtitle: "Talking Points",
				comment: "NEW FILL (ORAL/INSULIN/TEST STRIPS)"
			},

			"insider-3": {
				title: "Healthy Eating",
				subtitle: "Talking Points",
				comment: "REFILL (ORAL/INSULIN/TEST STRIPS)"
			},

			"insider-4": {
				title: "Physical Activity",
				subtitle: "Talking Points",
				comment: "NEW FILL (ORAL/INSULIN/TEST STRIPS)"
			},

			"insider-5": {
				title: "Physical Activity",
				subtitle: "Talking Points",
				comment: "REFILL (ORAL/INSULIN/TEST STRIPS)"
			},

			"insider-6": {
				title: "Blood Glucose Monitoring",
				subtitle: "Background Information - Overview",
				comment: "Ongoing patient self-management education and support are critical to preventing acute complications and reducing the risk of long-term complications in Patients With Diabetes (PWD)."
			},

			"insider-7": {
				title: "Blood Glucose Monitoring",
				subtitle: "Background Information - Importance of Monitoring",
				comment: "Monitoring of blood glucose is one of the key things to assessing patients’ diabetes control."
			},

			"insider-8": {
				title: "Blood Glucose Monitoring",
				subtitle: "Background Information - Current Guidelines on Timing",
				comment: "In 2015 the American Diabetes Association (ADA) released new guidelines for the treatment of DM. In 2011 the American Association of Clinical Endocrinologists (AACE) released the Medical Guidelines for Clinical Practice for Developing a Diabetes Mellitus Comprehensive Care Plan, which was updated with a simplified treatment algorithm in 2013."
			},

			"insider-9": {
				title: "Blood Glucose Monitoring",
				subtitle: "Background Information - Blood Glucose Patient Goals",
				comment: "Glycemic Index Recommendations for Adults (Non-Pregnant)"
			},

			"insider-10": {
				title: "Blood Glucose Monitoring",
				subtitle: "Background Information - Paired Testing",
				comment: "Market research suggests that over 19 MM people with diabetes check their blood glucose (Roper 2013). While the number of testers has increased, the frequency of testing has declined. Along with other reasons for the decline, many patients with diabetes don’t understand their numbers or don’t know what to do with the BG results they get."
			},

			"insider-11": {
				title: "Healthy Eating",
				subtitle: "Background Information - Overview",
				comment: "One of the most important tools for controlling diabetes progression is the achievement and maintenance of healthy eating habits."
			},

			"insider-12": {
				title: "Healthy Eating",
				subtitle: "Background Information - Carbohydrates",
				comment: "The body uses carbohydrates as its main fuel source. Carbohydrates are digested and then absorbed into your blood stream, where they are known as blood sugar or blood glucose. The glucose enters the body\'s cells with the help of insulin. Extra glucose is stored in the liver, muscles and other cells for later use or if unused, it is converted to fat."
			},

			"insider-13": {
				title: "Healthy Eating",
				subtitle: "Background Information - Fats",
				comment: "Fat in food is broken down into fatty acids that travel through the bloodstream for the cells to use. Excess fatty acids are packaged for storage in fat cells as triglycerides.<br>Saturated fats and trans fats (e.g. butter, lard, chocolate, poultry skin, palm oil, margarine, shortenings) raise the body’s cholesterol levels."
			},

			"insider-14": {
				title: "Healthy Eating",
				subtitle: "Background Information - How To Read A Food Label",
				comment: "When reading the nutrition facts on a food label, patients with diabetes should:"
			},

			"insider-15": {
				title: "Healthy Eating",
				subtitle: "Background Information - Glycemic Index",
				comment: "Glycemic index (GI) is a way of expressing how carbohydrate-containing foods raise blood glucose. It is based on the principle that some carbohydrate-containing foods will raise blood glucose more rapidly than others. This is due to the rate at which the body breaks them down."
			},

			"insider-16": {
				title: "Healthy Eating",
				subtitle: "Background Information - Meal Planning Tools",
				comment: "A diabetes meal plan is a guide for how much and what kinds of food patients with diabetes can choose to eat at meals and snack times. A good meal plan should fit in with a patient’s schedule and eating habits."
			},

			"insider-17": {
				title: "Healthy Eating",
				subtitle: "Background Information - Other Considerations",
				comment: "Alcohol. The ADA has very specific recommendations for patients with diabetes who consume alcohol. Alcohol can have a negative effect on a patient’s blood glucose for up to 24 hours."
			},

			"insider-18": {
				title: "Healthy Eating",
				subtitle: "Background Information - Proteins",
				comment: "The body breaks down proteins into amino acids, which are used to build new proteins. When carbohydrates and fats are not readily available, the body will use dietary protein as energy."
			},

			"insider-19": {
				title: "Healthy Eating",
				subtitle: "Background Information - Sweeteners",
				comment: "Nutritive sweeteners including sucrose, fructose, dextrose, corn sugar, maltose and honey, add carbohydrates and calories to diets. While called “nutritive”, they are low in nutritional value."
			},

			"insider-20": {
				title: "Physical Activity",
				subtitle: "Background Information - Overview",
				comment: "The ADA Standards of Medical Care – 2015 includes exercise as an important part of the diabetes management plan. Regular exercise has been shown to improve blood glucose control, reduce cardiovascular risk factors, contribute to weight loss, and improve well-being"
			},

			"insider-21": {
				title: "Physical Activity",
				subtitle: "Background Information - Guidelines for Physical Activity",
				comment: "Many studies have shown that regular physical activity improves glucose control in persons with type 2 diabetes. Physical activity is also a factor in weight loss and is particularly important in the weight maintenance phase."
			},

			"insider-22": {
				title: "Physical Activity",
				subtitle: "Background Information - Exercise and Blood Glucose Control",
				comment: "For patients with diabetes, it’s important to check blood glucose levels before exercising to ensure safety."
			},

			"insider-23": {
				title: "Physical Activity",
				subtitle: "Background Information - Exercise Intensity Levels",
				comment: "Exercising at the correct intensity can help patients get the most out of physical activity. For most healthy adults, the Department of Health and Human Services (HHS) recommends these exercise guidelines:"
			},

			"insider-24": {
				title: "Physical Activity",
				subtitle: "Background Information - Measuring Heart Rate",
				comment: "Exercise intensity must generally be at a moderate or vigorous level in order to deliver the most benefit. Measuring heart rate is a technique used to determine the intensity of physical activity."
			},

			"insider-25": {
				title: "Physical Activity",
				subtitle: "Background Information - Masuring Health and Fitness",
				comment: "Weight alone may not be a clear indicator of good health because it does not distinguish between pounds that come from body fat and those that come from lean body mass or muscle. To better measure health and fitness, Body Mass Index (BMI) and body fat percentage are two frequently used calculations."
			},

			"insider-26": {
				title: "Physical Activity",
				subtitle: "Background Information - Body Fat Percentage",
				comment: "BMI is used to determine whether a person is at a healthy weight for their height. But BMI doesn\'t tell the whole story because it doesn\'t measure body composition. So one may have a normal BMI while their body fat percentage is high enough to increase health risks."
			},

			"insider-27": {
				title: "Physical Activity",
				subtitle: "Background Information - Impact of Exercise",
				comment: "Regardless of the type of diabetes, regular physical activity is important for overall health and wellness."
			},

			"insider-28": {
				title: "Physical Activity",
				subtitle: "Background Information - Safety Tips",
				comment: "To help prevent injuries, dehydration, and hypoglycemia when exercising, patients with diabetes should:"
			},

			"insider-29": {
				title: "Background Basics",
				subtitle: "What is Diabetes?",
				comment: "Diabetes is a chronic health condition in which the body cannot produce or use insulin effectively. Insulin is made in the pancreas, and it is released after a meal to deliver glucose (energy) to the cells."
			},

			"insider-30": {
				title: "Background Basics",
				subtitle: "Types of Diabetes Mellitus (DM)",
				comment: "Type 1 – the pancreas does not produce insulin and is usually diagnosed in children and young adults."
			},

			"insider-31": {
				title: "Background Basics",
				subtitle: "National Diabetes Statistics",
				comment: "The CDC estimates 9.3% of the U.S. population has diabetes."
			},

			"insider-32": {
				title: "Solution Center",
				subtitle: "Free CONTOUR<sup>®</sup>NEXT meter codes for your patients",
				comment: "PHARMACIST REMINDER: Bayer CONTOUR<sup>®</sup>NEXT Test Strips and Control Solutions are sold separately."
			},

			"insider-33": {
				title: "Solution Center",
				subtitle: "Co-Pay mitigation for your patient - CONTOUR<sup>®</sup> Choice Program",
				comment: ""
			}
		}
	}
}