import HomeClient from "./components/HomeClient";

export default function Page() {
  return (
    <>
      {/* SEO контент в серверном компоненте */}
      <div className="sr-only">
        <h1>CircuitLabs - Quantum Resistant Blockchain Solutions</h1>
        <p>Build secure blockchains with zero-knowledge proofs and quantum-resistant cryptography. Advanced security for Web3 and decentralized systems.</p>
        <h2>Quantum Cryptography Research & Development</h2>
        <p>We specialize in post-quantum encryption, zero-knowledge proof systems, and quantum-resistant blockchain protocols for next-generation Web3 security.</p>
        <h3>Our Blockchain Security Services</h3>
        <ul>
          <li>Quantum-Resistant Blockchain Development</li>
          <li>Zero-Knowledge Proof Systems Implementation</li>
          <li>Post-Quantum Cryptography Solutions</li>
          <li>Blockchain Security Audits and Penetration Testing</li>
          <li>Web3 Infrastructure and Decentralized Systems</li>
          <li>Cryptographic Protocol Design and Analysis</li>
        </ul>
      </div>
      
      {/* Клиентская часть с анимациями */}
      <HomeClient />
    </>
  );
}