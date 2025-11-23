import { Introduction } from '../components/sections/Introduction';
import { HowItWorksSection } from '../components/sections/HowItWorks';  
// import { ReviewsSection } from '../components/sections/Reviews';
// import { SubscriptionsSection } from '../components/sections/Subscriptions';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';

export function HomePage(){
  return (
    <div>
      <Introduction />
      <HowItWorksSection />
      {/* <ReviewsSection /> */}
      {/* <SubscriptionsSection /> */}
      <NewsletterSignup />
    </div>
  );
}