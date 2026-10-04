export default function RestaurantMap({ title }: { title: string }) {
  return <div className="restaurant-map"><iframe title={title} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.777708559488!2d17.658505876604874!3d44.86681997309765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ddf88a591e9ff%3A0x26644446b63f4989!2zUm_FoXRpbGpuaWNhIFBldWxpxIc!5e0!3m2!1sen!2sba!4v1785747264846!5m2!1sen!2sba" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>;
}
