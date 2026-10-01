import React from "react";

function Profile() {
  return (
    <div className=" flex items-center gap-2 border-r pr-3 border-gray-200">
      <div className="w-10 h-10 rounded-full">
        <img
          src="./image/profile/admin.webp"
          alt="admin"
          className="rounded-full"
        />
      </div>
      <div>
        <p className="font-bold">محمد جواد کرمی</p>
        <p className="text-gray-900 text-sm">مدیر سایت</p>
      </div>
    </div>
  );
}

export default Profile;
