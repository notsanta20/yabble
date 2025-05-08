function HomeLayout({ Children }) {
  return (
    <div className="flex flex-col p-3">
      <Children />
    </div>
  );
}

export default HomeLayout;
