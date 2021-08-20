import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ isim: "", sehir: "", bio: "" });
  // const [isim, setIsim] = useState("");
  // const [sehir, setSehir] = useState("");
  // const [bio, setBio] = useState("");
  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  console.log("FORM", form);
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <form>
        <input
          value={form.isim}
          // handleChange Metodu form yapısını kullanarak tüm form elemanlarını alabilir
          // onChange={(e)=>setIsim(e.target.value)}
          onChange={handleChange}
          placeholder="Adınız"
          name="isim"
        />
        <br />
        <select onChange={handleChange} value={form.sehir} name="sehir">
          <option value="" disabled>
            Şehir Seçiniz
          </option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
        </select>
        <br />
        <textarea
          value={form.bio}
          onChange={handleChange}
          rows="10"
          placeholder="Biyografiniz"
          name="bio"
        />
      </form>
    </div>
  );
}
