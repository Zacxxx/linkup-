'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  TeamOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  SafetyOutlined,
  ExportOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Automatic Connections`,
      description: `Connect with all members of a group or organization in just a few clicks.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Time-Saving`,
      description: `Build your professional network in minutes, not months.`,
      icon: <ClockCircleOutlined />,
    },
    {
      heading: `Rapid Network Expansion`,
      description: `Grow your professional circle exponentially with our powerful algorithms.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `Global Reach`,
      description: `Connect with professionals worldwide, breaking geographical barriers.`,
      icon: <GlobalOutlined />,
    },
    {
      heading: `Data Security`,
      description: `Your information is safe with our OAuth authentication and strict data protection policies.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `Export Functionality`,
      description: `Easily export your connections for seamless integration with other tools.`,
      icon: <ExportOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Marketing Manager`,
      content: `LinkUp! transformed my networking strategy. I expanded my professional circle tenfold in just a week!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Chen`,
      designation: `Startup Founder`,
      content: `As a new entrepreneur, LinkUp! helped me connect with mentors and investors I never thought I'd reach. It's a game-changer!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emma Rodriguez`,
      designation: `HR Director`,
      content: `LinkUp! streamlined our company's networking process. We've seen a 200% increase in valuable industry connections.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `Michael Patel`,
      designation: `Sales Executive`,
      content: `I used to spend hours each week on networking. With LinkUp!, I've reclaimed that time while growing my network exponentially.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Laura Thompson`,
      designation: `Graduate Student`,
      content: `LinkUp! helped me build a strong professional network even before graduation. It's an essential tool for any student!`,
      avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    },
    {
      name: `Robert Kim`,
      designation: `Business Consultant`,
      content: `The efficiency of LinkUp! is unmatched. It's revolutionized how I approach professional networking.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for individuals and small teams`,
      monthly: 19,
      yearly: 190,
      features: [
        `Up to 500 connections per month`,
        `Basic analytics`,
        `Email support`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing businesses and organizations`,
      monthly: 49,
      yearly: 490,
      features: [
        `Unlimited connections`,
        `Advanced analytics`,
        `Priority support`,
        `Team collaboration features`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large corporations`,
      monthly: 99,
      yearly: 990,
      features: [
        `Custom integration`,
        `Dedicated account manager`,
        `24/7 premium support`,
        `Advanced security features`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does LinkUp! work?`,
      answer: `LinkUp! uses advanced algorithms to automatically connect you with members of specified groups or organizations on LinkedIn and other social platforms. Simply select your target group, and LinkUp! does the rest.`,
    },
    {
      question: `Is LinkUp! compliant with LinkedIn's terms of service?`,
      answer: `Yes, LinkUp! operates within the boundaries set by LinkedIn's API and terms of service. We use OAuth for authentication and respect all rate limits to ensure compliance.`,
    },
    {
      question: `Can I use LinkUp! for multiple social platforms?`,
      answer: `Currently, LinkUp! primarily focuses on LinkedIn. However, we're constantly expanding and plan to integrate other professional networking platforms in the near future.`,
    },
    {
      question: `How secure is my data with LinkUp!?`,
      answer: `We take data security very seriously. LinkUp! uses industry-standard encryption and OAuth authentication to ensure your data remains safe and private at all times.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Sign Up`,
      description: `Create your LinkUp! account in minutes.`,
    },
    {
      heading: `Connect`,
      description: `Link your professional social media accounts.`,
    },
    {
      heading: `Select`,
      description: `Choose the groups or organizations you want to connect with.`,
    },
    {
      heading: `Grow`,
      description: `Watch your network expand automatically!`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Spending hours manually connecting with professionals`,
    },
    {
      emoji: `😞`,
      title: `Missing out on valuable networking opportunities`,
    },
    {
      emoji: `😰`,
      title: `Struggling to maintain and grow your professional network`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Supercharge Your Professional Network in Minutes`}
        subtitle={`LinkUp! automates your LinkedIn connections, helping you build a powerful network effortlessly.`}
        buttonText={`Start Networking`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/0BQprP-linkup-PHjh`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`professionals networking smarter`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The Hidden Cost of Manual Networking: 41% of Professionals Struggle to Grow Their Network`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Effortless Networking in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock the Power of Automated Networking`}
        subtitle={`Discover how LinkUp! can transform your professional connections`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How LinkUp! Transformed Careers`}
        subtitle={`Join thousands of professionals who've supercharged their networks`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Network, Invest in Your Future`}
        subtitle={`Choose the plan that fits your networking goals`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Everything you need to know about LinkUp!`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Networking?`}
        subtitle={`Join LinkUp! today and start building meaningful connections effortlessly.`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
