import { useState } from "react";

function MainContent() {
  const [mataKuliah, setMataKuliah] = useState("");
  const [hari, setHari] = useState("");
  const [jam, setJam] = useState("");
  const [jadwal, setJadwal] = useState([]);

  const tambahJadwal = () => {
    if (mataKuliah && hari && jam) {
      setJadwal([...jadwal, { mataKuliah, hari, jam }]);
      setMataKuliah("");
      setHari("");
      setJam("");
    }
  };

  const hapusJadwal = (index) => {
    setJadwal(jadwal.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Tambah Jadwal</h2>

      <input
        type="text"
        placeholder="Mata Kuliah"
        value={mataKuliah}
        onChange={(e) => setMataKuliah(e.target.value)}
      />

      {/* DROPDOWN HARI */}
      <select value={hari} onChange={(e) => setHari(e.target.value)}>
        <option value="">Pilih Hari</option>
        <option>Senin</option>
        <option>Selasa</option>
        <option>Rabu</option>
        <option>Kamis</option>
        <option>Jumat</option>
      </select>

      <input
        type="text"
        placeholder="Jam (contoh: 08:00)"
        value={jam}
        onChange={(e) => setJam(e.target.value)}
      />

      <button onClick={tambahJadwal}>Tambah</button>

      <h2>Daftar Jadwal</h2>

      <ul>
        {jadwal.map((item, index) => (
          <li key={index}>
            <b>{item.mataKuliah}</b> - {item.hari} ({item.jam})
            <button
              className="delete-btn"
              onClick={() => hapusJadwal(index)}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainContent;