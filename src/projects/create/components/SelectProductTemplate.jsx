import React from 'react'
import PT from 'prop-types'

import ProjectTypeCard from './ProjectTypeCard'

import ConnectLogoMono from '../../../assets/icons/connect-logo-mono.svg'

import './SelectProductTemplate.scss'

import IconAnalyticsAlgorithmOptimization from '../../../assets/icons/product-analytics-algorithm-optimization.svg'
import IconAnalyticsComputerVision from '../../../assets/icons/product-analytics-computer-vision.svg'
import IconAnalyticsDataExploration from '../../../assets/icons/product-analytics-data-exploration.svg'
import IconAnalyticsPredictiveAnalytics from '../../../assets/icons/product-analytics-predictive-analytics.svg'
import IconAppApp from '../../../assets/icons/product-app-app.svg'
import IconCatAnalytics from '../../../assets/icons/product-cat-analytics.svg'
import IconCatApp from '../../../assets/icons/product-cat-app.svg'
import IconCatChatbot from '../../../assets/icons/product-cat-chatbot.svg'
import IconCatDesign from '../../../assets/icons/product-cat-design.svg'
import IconCatDevelopment from '../../../assets/icons/product-cat-development.svg'
import IconCatQa from '../../../assets/icons/product-cat-qa.svg'
import IconCatWebsite from '../../../assets/icons/product-cat-website.svg'
import IconChatbotChatbot from '../../../assets/icons/product-chatbot-chatbot.svg'
import IconChatbotWatson from '../../../assets/icons/product-chatbot-watson.svg'
import IconDesignAppVisual from '../../../assets/icons/product-design-app-visual.svg'
import IconDesignInfographic from '../../../assets/icons/product-design-infographic.svg'
import IconDesignOther from '../../../assets/icons/product-design-other.svg'
import IconDesignWireframes from '../../../assets/icons/product-design-wireframes.svg'
import IconDevFrontendDev from '../../../assets/icons/product-dev-front-end-dev.svg'
import IconDevIntegration from '../../../assets/icons/product-dev-integration.svg'
import IconDevOther from '../../../assets/icons/product-dev-other.svg'
import IconDevPrototype from '../../../assets/icons/product-dev-prototype.svg'
import IconOtherDesign from '../../../assets/icons/product-other-design.svg'
import IconQaConsulting from '../../../assets/icons/product-qa-consulting.svg'
import IconQaCrowdTesting from '../../../assets/icons/product-qa-crowd-testing.svg'
import IconQaDigitalAccessability from '../../../assets/icons/product-qa-digital-accessability.svg'
import IconQaHelthCheck from '../../../assets/icons/product-qa-health-check.svg'
import IconQaMobilityTesting from '../../../assets/icons/product-qa-mobility-testing.svg'
import IconQaOsAutomation from '../../../assets/icons/product-qa-os-automation.svg'
import IconQaWebsitePrerfomance from '../../../assets/icons/product-qa-website-performance.svg'
import IconQaSFDCAccelerator from '../../../assets/icons/product-qa-sfdc-accelerator.svg'
import IconWebsiteWebsite from '../../../assets/icons/product-website-website.svg'
import IconOutlineWorkProject from '../../../assets/icons/tech-32px-outline-work-project.svg'

const ProjectTypeIcon = ({ type }) => {
  // if type is defined as a relative path to the icon, convert it to icon "id"
  const typeAsPath = type && type.match(/(?:\.\.\/)+assets\/icons\/([^.]+)\.svg/)
  if (typeAsPath) {
    type = typeAsPath[1]
  }

  switch(type){
  case 'product-analytics-algorithm-optimization':
    return <IconAnalyticsAlgorithmOptimization className="icon-analytics-algorithm-optimization"/>
  case 'product-analytics-computer-vision':
    return <IconAnalyticsComputerVision className="icon-analytics-computer-vision"/>
  case 'product-analytics-data-exploration':
    return <IconAnalyticsDataExploration className="icon-analytics-data-exploration"/>
  case 'product-analytics-predictive-analytics':
    return <IconAnalyticsPredictiveAnalytics className="icon-analytics-predictive-analytics"/>
  case 'product-app-app':
    return <IconAppApp className="icon-app-app"/>
  case 'product-cat-analytics':
    return <IconCatAnalytics className="icon-cat-analytics"/>
  case 'product-cat-app':
    return <IconCatApp className="icon-cat-app"/>
  case 'product-cat-chatbot':
    return <IconCatChatbot className="icon-cat-chatbot"/>
  case 'product-cat-design':
    return <IconCatDesign className="icon-cat-design"/>
  case 'product-cat-development':
    return <IconCatDevelopment className="icon-cat-development"/>
  case 'product-cat-qa':
    return <IconCatQa className="icon-cat-qa"/>
  case 'product-cat-website':
    return <IconCatWebsite className="icon-cat-website"/>
  case 'product-chatbot-chatbot':
    return <IconChatbotChatbot className="icon-chatbot-chatbot"/>
  case 'product-chatbot-watson':
    return <IconChatbotWatson className="icon-chatbot-watson"/>
  case 'product-design-app-visual':
    return <IconDesignAppVisual className="icon-design-app-visual"/>
  case 'product-design-infographic':
    return <IconDesignInfographic className="icon-design-infographic"/>
  case 'product-design-other':
    return <IconDesignOther className="icon-design-other"/>
  case 'product-design-wireframes':
    return <IconDesignWireframes className="icon-design-wireframes"/>
  case 'product-dev-front-end-dev':
    return <IconDevFrontendDev className="icon-dev-frontend-dev"/>
  case 'product-dev-integration':
    return <IconDevIntegration className="icon-dev-integration"/>
  case 'product-dev-other':
    return <IconDevOther className="icon-dev-other"/>
  case 'product-dev-prototype':
    return <IconDevPrototype className="icon-dev-prototype"/>
  case 'product-other-design':
    return <IconOtherDesign  className="icon-dev-other"/>
  case 'product-qa-consulting':
    return <IconQaConsulting className="icon-qa-consulting"/>
  case 'product-qa-crowd-testing':
    return <IconQaCrowdTesting className="icon-qa-crowd-testing"/>
  case 'product-qa-digital-accessability':
    return <IconQaDigitalAccessability className="icon-qa-digital-accessability"/>
  case 'product-qa-health-check':
    return <IconQaHelthCheck className="icon-qa-health-check"/>
  case 'product-qa-mobility-testing':
    return <IconQaMobilityTesting className="icon-qa-mobility-testing"/>
  case 'product-qa-os-automation':
    return <IconQaOsAutomation className="icon-qa-os-automation"/>
  case 'product-qa-website-performance':
    return <IconQaWebsitePrerfomance className="icon-qa-website-performance"/>
  case 'product-qa-sfdc-accelerator':
    return <IconQaSFDCAccelerator className="icon-qa-sfdc-accelerator" />
  case 'product-website-website':
    return <IconWebsiteWebsite className="icon-website-website"/>
  case 'tech-32px-outline-work-project':
    return <IconOutlineWorkProject className="icon-outline-work-project" />
  default:
    // this will be default icon
    return <IconDevOther className="icon-dev-other"/>
  }
}

ProjectTypeIcon.propTypes = {
  type: PT.string,
}

const SelectProductTemplate = ({
  onProductTemplateChange,
  productTemplates,
  productCategories,
}) => {
  const cards = {}
  const categoryNames = {}
  if (productCategories) {
    productCategories.forEach((category) => {
      categoryNames[category.key] = category.displayName
    })
  }

  productTemplates.forEach((productTemplate) => {
    // don't render disabled items for selection
    // don't render hidden items as well, hidden items can be reached via direct link though
    if (productTemplate.disabled || productTemplate.hidden) return

    const icon = <ProjectTypeIcon type={productTemplate.icon} />
    const category = productTemplate.category || ''
    cards[category] = cards[category] || []
    cards[category].push(
      <ProjectTypeCard
        icon={icon}
        info={productTemplate.info || productTemplate.details}
        key={productTemplate.id}
        onClick={() => onProductTemplateChange(productTemplate.key || productTemplate.productKey)}
        type={productTemplate.name}
        buttonText="Add phase to project"
      />
    )
  })
  const cardDivs = []
  Object.keys(cards).forEach((category) => {
    const card = cards[category]
    const catLabel = categoryNames[category] || category
    cardDivs.push(<div key={category}><div className="label">{catLabel}</div><div className="cards">{card}</div></div>)
  })
  return (
    <div>
      <div className="header headerSelectProductTemplate">
        <ConnectLogoMono className="icon-connect-logo-mono"/>
      </div>
      <div className="SelectProductTemplate">
        <h1>Add A New Phase</h1>
        {cardDivs}
      </div>
    </div>
  )
}

SelectProductTemplate.propTypes = {
  onProductTemplateChange: PT.func.isRequired,
  productTemplates: PT.array.isRequired,
  productCategories: PT.array.isRequired,
}

export default SelectProductTemplate
