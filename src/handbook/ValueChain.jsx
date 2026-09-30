/* Interactive value-chain diagram — same phases, nodes and click targets as the original. */
export default function ValueChain({ onShow, onGoto }) {
  const N = ({ kind, show, go, children }) => (
    <button type="button" className={`node ${kind}`} onClick={() => (show ? onShow(show) : onGoto(go))}>
      {children}
    </button>
  );
  const Cat = ({ children }) => <div className="vc-cat">{children}</div>;
  const Row = ({ children }) => <div className="vc-row">{children}</div>;

  return (
    <div className="vc">
      <div className="vc-title">FISHERIES VALUE CHAIN</div>
      <div className="vc-diagram">
        <div className="vc-phase">
          <h3>INPUT</h3>
          <div className="vc-phase-body">
            <N kind="process" show="seed-production">Seed Production</N>
            <Cat>Fish Seed</Cat>
            <N kind="soft" show="feed-mill">Feed Inputs / Supply</N>
            <Cat>Feed</Cat>
            <N kind="process" show="medication">Health Inputs</N>
            <Cat>Medication</Cat>
          </div>
        </div>

        <div className="vc-arrow" aria-hidden="true">›</div>

        <div className="vc-phase wide">
          <h3>PRODUCTION</h3>
          <div className="vc-phase-body">
            <Cat>Hatchery</Cat>
            <Row>
              <div className="vc-col">
                <N kind="soft" show="broodstock">Broodstock Management</N>
                <N kind="soft" show="induced-breeding">Induced Breeding</N>
              </div>
              <div className="vc-col">
                <N kind="link" go="hatchery">Spawning</N>
                <N kind="soft" show="incubation">Incubation / Hatching</N>
              </div>
              <div className="vc-col">
                <N kind="process" show="spawn-collection">Spawn Collection</N>
              </div>
            </Row>
            <Cat>Nursery Rearing</Cat>
            <Row>
              <N kind="soft" show="hatchling-spawn">Hatchling / Spawn</N>
              <N kind="soft" show="fry">Fry</N>
              <N kind="link" go="hatchery">Fingerlings</N>
            </Row>
            <Cat>Grow-out Farming</Cat>
            <Row>
              <N kind="soft" show="pond">Pond Culture</N>
              <N kind="soft" show="cage">Cage Culture</N>
              <N kind="link" go="biofloc">Biofloc</N>
              <N kind="link" go="ras">RAS</N>
            </Row>
            <Cat>Support Practices</Cat>
            <Row>
              <N kind="link" go="waterquality">Water Quality</N>
              <N kind="soft" show="feeding">Feeding</N>
              <N kind="link" go="diseases">Fish Health</N>
              <N kind="tech" show="aerator-prod">Aerator</N>
            </Row>
            <Cat>Harvesting</Cat>
            <N kind="process" show="harvesting">Harvesting</N>
          </div>
        </div>

        <div className="vc-arrow" aria-hidden="true">›</div>

        <div className="vc-phase">
          <h3>PROCESSING &amp; STORAGE</h3>
          <div className="vc-phase-body">
            <Cat>Drying</Cat>
            <N kind="link" go="processing">Fish Dryer</N>
            <N kind="link" show="smoking">Smoking</N>
            <Cat>Chilling</Cat>
            <N kind="link" show="cold-room">Cold Room</N>
            <N kind="link" show="freezing">Freezing</N>
            <Cat>Fresh Storage</Cat>
            <N kind="link" show="fresh-storage">Fresh Fish Storage</N>
            <Cat>By-products</Cat>
            <N kind="link" show="value-addition">Value Addition</N>
          </div>
        </div>

        <div className="vc-arrow" aria-hidden="true">›</div>

        <div className="vc-phase">
          <h3>RETAIL &amp; MARKETING</h3>
          <div className="vc-phase-body">
            <Cat>Live Fish Marketing</Cat>
            <Row>
              <N kind="link" go="processing">Live Fish</N>
              <N kind="link" go="processing">Aerated Transport</N>
            </Row>
            <Cat>Dry Fish Marketing</Cat>
            <Row>
              <N kind="link" go="processing">Dry Fish</N>
              <N kind="link" show="smoking">Smoked Fish</N>
            </Row>
            <Cat>Frozen Fish Marketing</Cat>
            <Row>
              <N kind="link" go="processing">Frozen Fish</N>
              <N kind="link" go="processing">Reefer Van</N>
            </Row>
          </div>
        </div>
      </div>
      <div className="vc-legend">
        <span><i style={{ background: 'var(--pond)' }} /> Process</span>
        <span><i style={{ background: 'var(--pond-soft)', border: '1px solid var(--pond)' }} /> Stage</span>
        <span><i style={{ background: 'var(--info-soft)', border: '1px solid var(--info)' }} /> Technology</span>
        <span><i style={{ background: 'var(--marigold)' }} /> Linked stage</span>
      </div>
    </div>
  );
}
