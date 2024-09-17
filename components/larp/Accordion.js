import Accordion from 'react-bootstrap/Accordion'
import styles from '@/styles/larp/Accordion.module.css'

function AccordionItem() {
  return (
    <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item className={styles.accordionItem} eventKey="0">
        <Accordion.Header className={styles.accordionHeader}>
          <h3>注意事項</h3>
        </Accordion.Header>
        <Accordion.Body className={styles.accordionButton}>
          <ul>
            <li>身高 110 公分以上即可入場；12歲以下需成人陪同。</li>
            <li>
              患有黑暗恐懼症、幽閉恐懼症、心血管疾病、孕婦與行動不便者，請自行斟酌參加。
            </li>
            <li>
              建議穿著方便行動的服裝與鞋子，請勿穿著跟鞋(著跟鞋者需現場購買襪子)。
            </li>
            <li>
              <strong>
                爲維護遊戲品質與玩家權益，請務必提早 5 分鐘報到入場，遲到 5
                分鐘以上視為自動放棄參與權益，並且不提供退換票服務。
              </strong>
            </li>
            <li>
              遊戲進行中請勿飲食、拍照、攝影、錄音，以維護其他玩家遊戲品質。
            </li>
            <li>活動期間禁止攜帶外食。</li>
            <li>請勿攜帶危險物品，場地提供置物服務，物品請自行負保管責任。</li>
            <li>
              這是個考驗智慧、觀察力與團隊合作的遊戲，切忌使用蠻力尋找線索。
            </li>
            <li>出發日前 7 日前（不含出發日）通知取消，可全額退費。</li>
            <li>
              出發日前 6 日至前 4 日內（不含出發日）通知取消，收取手續費
              50％；或改期一次（僅限同活動方案及相同價格）。
            </li>
            <li>
              出發日前 3 日（不含出發日）至當日內不接受取消，並不予退回款項。
            </li>
            <li>
              於活動中如因非可究責主辦單位之因素中止參與活動，將不予退回款項。
            </li>
            <li>如因天災等不可抗力因素，石之骰 將主動聯繫延期或退款。</li>
            <li>上述時間以消費者進線客服人員表明要取消的時間點為準。</li>
            <li>取消收取手續費依四捨五入計算至元。</li>
            <li>
              同筆訂單因可歸責於消費者理由提出修改時，僅得修改一次，並限更改時同方案有可選擇之時段，且更改的時段價格不得高於原訂單金額。
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className={styles.accordionItem} eventKey="1">
        <Accordion.Header className={styles.accordionHeader}>
          <h3>客戶須知</h3>
        </Accordion.Header>
        <Accordion.Body className={styles.accordionButton}>
          <ul>
            <li>
              如欲查詢退訂規則或有取消訂單之需求，請參考「注意事項」
              了解詳細資訊。
            </li>
            <li>
              如因天災等不可抗力之因素，或因報名人數未達開班門檻而須取消活動，石之骰
              將主動聯繫延期或退款。
            </li>
            <li>
              若因訂購資訊填寫不完整致使店家無法提供服務，店家有權取消該筆訂單。
            </li>
            <li>
              為保障其他學員及老師權益，請消費者務必於您訂購的體驗時間準時抵達。
            </li>
            <li>特殊需求之額外費用，依現場規定收取。</li>
            <li>個別方案之特殊規則依注意事項為準。</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className={styles.accordionItem} eventKey="2">
        <Accordion.Header className={styles.accordionHeader}>
          <h3>取消與更改時間政策</h3>
        </Accordion.Header>
        <Accordion.Body className={styles.accordionButton}>
          <span>更改訂單時間注意事項：</span>
          <ul>
            <li>在享樂時間開始 3 天前，可更改一次享樂時間。</li>
            <li>享樂時間變更後，該訂單不可再次更改或取消。</li>
            <li>線上付款更改時間如有價差，將不另行退款。</li>
          </ul>
          <span>取消訂單注意事項：</span>
          <ul>
            <li>在享樂時間開始前 7 日（含）前取消，將全額退費。</li>
            <li>
              在享樂時間開始前 4 ～ 6 日（含）取消，將收取訂單金額之 50% 訂金。
            </li>
            <li>
              在享樂時間當天（第 0 日） ～ 享樂時間開始前 3
              日（含）取消，將收取訂單金額之 100% 訂金。
            </li>
            <li>
              若使用信用卡分期付款且有收取部分款項時，於全額退回款項後，以此交易相同信用卡支付。
            </li>
            <li>截止時間皆以方案當地時間為準。</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AccordionItem
