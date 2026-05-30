import React from 'react'

const EditProfile = () => {

const username = "";
const email = "";
const phoneNumber = "";
function updateProfile(username, email, phoneNumber) {
   username = username;
   email = email;
   phoneNumber = phoneNumber;
   return { username, email, phoneNumber };

}

  return (
    <div>
        <form style={{ maxWidth: 400, margin: "40px auto", background: "white", padding: 20, borderRadius: 8 }}>
          <h2 style={{ textAlign: "center", marginBottom: 24, color: "#1a1a1a" }}>Edit Profile</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input placeholder="Full Name" name="username" value={username} type="text" style={{ padding: 10, borderRadius: 4, border: "1px solid #ccc" }} />
                <input placeholder="Email" name="email" value={email} type="email" style={{ padding: 10, borderRadius: 4, border: "1px solid #ccc" }} />
                <input placeholder="Phone Number" name="phoneNumber" type="tel" value={phoneNumber} style={{ padding: 10, borderRadius: 4, border: "1px solid #ccc" }} />
                <button type="submit" style={{ background: "#C9848A", color: "white", border: "none", padding: 10, borderRadius: 4, cursor: "pointer" }}>
                    Save Changes
                </button>
            </div>
        </form>
    </div>
  )
}


export default EditProfile
