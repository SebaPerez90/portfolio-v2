import avatar_profile from '@/assets/avatar-profile.webp';

const AvatarProfile = () => {
  return (
    <figure className="rounded-full overflow-hidden bg-black sm:h-[18em] sm:w-[18em] h-[10em] w-[10em]">
      <img src={avatar_profile} alt="avatar-profile-image" className="size-full object-cover" />
    </figure>
  );
};

export default AvatarProfile;
