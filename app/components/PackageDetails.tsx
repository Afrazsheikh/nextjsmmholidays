"use client";

import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";

export default function PackageDetails({ packageId }: { packageId: string }) {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [otherPackages, setOtherPackages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

    
    
       /* ---------- Load Packages ---------- */
const loadPackages = async () => {
  try {
    setLoading(true);
    setError("");

    const res = await fetch("/api/packages");

    if (!res.ok) {
      throw new Error("Failed to fetch packages");
    }

    const data = await res.json();
console.log(data);
  setOtherPackages(data);
 
  } catch (err: unknown) {
    setError(err instanceof Error ? err.message : "Something went wrong");
  } finally {
    setLoading(false);
  }
};

    

useEffect(() => {
  loadPackages();
}, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch("/api/packages");
      const data = await res.json();

      const mainPkg = data.find((p: any) => p.id === packageId);
      const others = data.filter((p: any) => p.id !== packageId);

      setSelectedPackage(mainPkg);
    //   setOtherPackages(others);
      setLoading(false);
    };

    loadData();
  }, [packageId]);

  if (loading) return <p>Loading package...</p>;
  if (!selectedPackage) return <p>Package not found</p>;

  return (
    <div style={{ padding: "24px" }}>
      {/* MAIN PACKAGE */}
      <h2>Package Details</h2>
      <PackageCard
        pkg={selectedPackage}
        isSelected={false}
        onToggleSelect={() => {}}
        wordLimit={100}
      />

      {/* RECOMMENDATIONS */}
      <h3 style={{ marginTop: "40px" }}>You may also like</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "16px",
        }}
      >
        {otherPackages.slice(0, 4).map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            isSelected={false}
            onToggleSelect={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
