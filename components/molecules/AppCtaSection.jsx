import AppButton from '../atomics/AppButton';

const AppCtaSection = () => (
    <section className="py-20 border-b border-light-gray">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-black">
          GET IN TOUCH
        </h2>
        <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2">
          Is there anything we can help with? Our inbox and social media are always open for you, feel free to ask, we will try our best for you. Thank you for visiting the PKWU X MIPA 5 site.
        </p>
        <AppButton title="Say Hi.." href="/contact" color="orange" />
      </div>
    </section>
  );

export default AppCtaSection;
