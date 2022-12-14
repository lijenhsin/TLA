import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import { Noto_Serif_TC } from "@next/font/google";

const MingTi = Noto_Serif_TC({
  weight: "500",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>關於台灣喉科醫學會：About TLA</title>
        <meta name="description" content="About TLA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <SectionTitle pretitle="About" title="台灣喉科醫學會沿革">
        <div className={`${MingTi.className} leading-8`}>
          台灣喉科醫學會(Taiwan Laryngological
          Association)於2022年3月由林口長庚耳鼻喉部
          <Link
            className="text-sky-800 dark:text-sky-200"
            href="/members/fangtj"
          >
            方端仁醫師
          </Link>
          等人籌備發起。於2022 年7 月30 日下午14:00
          假花蓮慈濟⼤學和敬樓⼆樓第⼆討論室舉⾏「發起⼈會議暨籌備會議」（發起人方端仁等35人）。後於2022年9月24日於台北長庚醫院中醫大樓（台北市松山區敦化北路199巷6號）B1會議室舉辦成立大會暨第一屆第一次會員大會以及第一屆理監事選舉及學會章程，核報內政部審議通過。
        </div>
      </SectionTitle>

      <SectionTitle
        pretitle="Bylaws and Association Rules of TLA"
        title="台灣喉科醫學會章程"
      >
        <h2 className="text-right text-sm lg:text-lg">
          內政部111年 12月台內團字第{" "}
          <b className="text-sky-800 dark:text-sky-200">1110057028</b>{" "}
          號函准予備查
        </h2>
        <h2 className="text-right text-sm lg:text-lg">
          中華民國 111 年 8 月 2 日籌備會修訂
        </h2>{" "}
        <h2 className="text-right mb-5 text-sm lg:text-lg">
          中華民國 111 年 9 月 24 日會員大會決議通過
        </h2>
        <hr />
        <div
          className={`text-sm md:text-lg text-left leading-8 md:leading-9  ${MingTi.className}`}
        >
          <h2 className="text-black dark:text-white text-2xl mt-5 mb-5">
            第一章　總則
          </h2>
          <div className="text-md pl-10 -indent-10 md:pl-24 md:-indent-24 whitespace-pre-line">
            第　一　條　本會名稱為台灣喉科醫學會，英文名稱為 Taiwan
            Laryngological Association（以下簡稱本會）。
            <div>
              第　二　條　本會為依法設立、非以營利為目的之公益性社會團體，以推動國內喉科學、睡眠外科、吞嚥上呼吸消化道外科領域之持續精進，進而提升醫療服務品質、促進病人福祉為宗旨。{" "}
            </div>
            <div>第　三　條　本會之任務如下，並依相關法令規定推動及執行：</div>
            <ul className="ml-10 -indent-10">
              <li>一、咽喉氣管食道領域相關教育訓練 </li>
              <li>二、推動喉科醫師之教育訓練與舉辦相關會議</li>
              <li>三、咽喉氣管食道領域創新研究 </li>
              <li>四、促進國內外相關學術團體間之交流及合作</li>
              <li>五、處理及承辦與咽喉氣管食道醫學相關的其他事項。</li>
            </ul>
            <div>
              第　四　條　本會之主管機關為內政部，本會之目的事業應受各該事業主管機關之指導、監督。
            </div>
            <div>第　五　條　本會以全國行政區域為組織區域。 </div>
            <div>
              第　六　條　本會會址設於主管機關所轄地區，並得報經主管機關核准設分支機構。
              前項分支機構組織簡則由理事會擬訂，報請主管機關核准後行之。
              會址及分支機構之地址於設置及變更時，應函報主管機關核備。
            </div>
          </div>
          　
          <h2 className="text-black dark:text-white text-2xl mb-5">
            第二章　會員、理事及監事
          </h2>
          <div className="text-md pl-10 -indent-10 md:pl-24 md:-indent-24 whitespace-pre-line">
            <div>
              第　七　條　本會會員及會費分類如下：
              <ul className="ml-10 -indent-10">
                <li>
                  {" "}
                  一、個人會員：凡贊同本會宗旨且具有中華民國耳鼻喉科專科醫師資格者，填具入會申請書，經理事會審查通過，並繳納會費後，為個人會員。
                </li>

                <li>
                  二、相關會員：凡贊同本會宗旨且具有中華民國醫師資格者，填具入會申請書，經理事會審查通過，並繳納會費後，為相關會員。相關會員經取得中華民國耳鼻喉科專科醫師資格者，得經理事會審查通過後，取得個人會員資格。
                </li>

                <li>
                  三、贊助會員：凡贊同本會宗旨且贊助本會經費、資源之個人或團體，填具入會申請書，經理事會審查通過後，為贊助會員。
                </li>

                <li>
                  四、榮譽會員：
                  具有下列資格之一，經本會理監事會議通過並提出會員大會通過者，得聘為榮譽會員。
                  <ul className="ml-10">
                    <li>（一）對喉科學相關領域有特殊貢獻者。</li>
                    <li>（二）對本會會務有特殊貢獻者。</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              第　八　條　會員有表決權、選舉權、被選舉權與罷免權。每一會員為一權。
              相關會員、贊助會員、榮譽會員，無前項權利。
            </div>
            <div>第　九　條　本會理事及監事，任期三年。</div>
            <div>
              第　十　條　本會置理事11人（含常務理事3人，其中1人為理事長）、候補理事1人。常務理事，由全體理事互選之。
              理事長，由全體理事就常務理事中選舉之。{" "}
            </div>
            <div>
              第十一 條　本會置監事3人（其中1人為常務監事）、候補監事1人。
              監事會置常務監事，由監事互選之，監察日常會務，並擔任監事會主席。
            </div>
            <div>
              第十二 條　會員有遵守本會章程、決議及繳納會費之義務。
              會員未繳納會費者，不得享有會員權利，連續2年未繳納會費者，視為自動退會。會員經出會、退會或停權處分，如欲申請復會或復權時，除有正當理由經理事會審核通過者外，應繳清前所積欠之會費。
            </div>
            <div>
              第 十三
              條　會員有違反法令、章程或不遵守會員大會決議時，得經理事會決議，予以警告或停權處分，其危害團體情節重大者，得經會員大會決議予以除名。
            </div>
            <div>第 十四 條　會員有下列情事之一者，為出會： </div>
            <ul className="ml-10 -indent-10">
              <li>一、死亡。</li>
              <li>二、喪失會員資格者。</li>
              <li>三、經會員（會員代表）大會決議除名者。 </li>
            </ul>
            <div>第 十五 條　會員得以書面敘明理由向本會聲明退會。</div>
          </div>
          　
          <h2 className="text-black dark:text-white text-2xl mb-5">
            第三章　組織及職權{" "}
          </h2>
          <div className="text-md pl-10 -indent-10 md:pl-24 md:-indent-24 whitespace-pre-line">
            <div>
              第 十六
              條　本會以會員大會為最高權力機構。會員人數超過300人以上者，得分區比例選出會員代表，再合開會員代表大會，行使會員大會職權。會員代表任期與理事、監事相同，其名額及選舉辦法由理事會通過後實施，並報主管機關備查。
            </div>
            <div>第 十七 條　會員大會之職權如下： </div>
            <ul className="ml-10 -indent-10">
              <li>一、訂定與變更章程。</li>
              <li>二、選舉及罷免理事、監事。</li>
              <li>三、議決入會費、常年會費、事業費及會員捐款之數額及方式。</li>
              <li> 四、議決年度工作計畫、報告及預算、決算。</li>
              <li> 五、議決會員之除名處分。</li>
              <li>六、議決財產之買賣、轉讓或他項權利設定等處分。</li>
              <li>七、議決本會之解散。</li>
              <li>八、議決與會員權利義務有關之其他重大事項。</li>
            </ul>
            前項第八款重大事項之範圍由理事會定之。
            <div>
              第 十八 條　本會理事、監事，由會員選舉之，分別成立理事會、監事會。
              選舉前項理事、監事時，依計票情形得同時選出候補理事，候補監事，遇理事、監事出缺時，分別依序遞補之。
              理事會得提出下屆理事、監事候選人參考名單。
              理事、監事得採用通訊選舉。通訊選舉辦法由理事會通過後實施，並報主管機關備查。
            </div>
            <div>
              第 十九
              條　理事長對內綜理督導會務，對外代表本會，並擔任會員大會、理事會主席。
              理事長因事不能執行職務時，應指定常務理事1人代理之，未指定或不能指定時，由常務理事互推1人代理之。
              理事長、常務理事出缺時，應於1個月內補選之。{" "}
            </div>
            <div>
              第 二十 條　理事會之職權如下： 議決會員大會之招開事項
              審定會員入會之資格。 選舉及罷免常務理事、理事長。
              議決理事、常務理事及理事長之辭職。 聘免工作人員。
              擬訂年度工作計畫、報告及預算、決算。 其他應執行事項。
            </div>
            <div>
              第二十一條　常務監事因事不能執行職務時，應指定監事1人代理之，未指定或不能指定時，由監事互推1人代理之。
              監事會主席（常務監事）出缺時，應於1個月內補選之。
            </div>
            <div>第二十二條　監事會之職權如下： </div>
            <ul className="ml-10 -indent-10">
              <li>一、監察理事會工作之執行。</li>
              <li>二、審核年度決算。 </li>
              <li>三、選舉及罷免常務監事。</li>
              <li>四、議決監事及常務監事之辭職。 五、其他應監察事項。</li>
            </ul>
            <div>
              第二十三條　理事、監事均為無給職，連選得連任。理事長之連任，以1次為限。理事、監事之任期自召開本屆第1次理事會之日起計算。
            </div>
            <div>第二十四條　理事、監事有下列情事之一者，應即解任：</div>
            <ul className="ml-10 -indent-10">
              <li>一、喪失會員資格者。 </li>
              <li>二、因故辭職經理事會或監事會決議通過者。</li>
              <li>三、被罷免或撤免者。 </li>
              <li>四、受停權處分期間逾任期二分之一者。</li>
            </ul>
            <div>
              第二十五條　本會置秘書長1人、副秘書長1人，承理事長之命處理本會事務，其他工作人員若干人，均由理事長提名經理事會通過聘免之，並報主管機關備查。前項工作人員不得由理事、監事擔任。工作人員權責及分層負責事項由理事會另定之。
            </div>
            <div>
              第二十六條　本會得設各種委員會、小組或其他內部作業組織，其組織簡則經理事會通過後施行，變更時亦同。
            </div>
            <div>
              第二十七條　本會得由理事會聘請名譽理事長1人，名譽理事、顧問若干人，其聘期與理事、監事之任期同。
            </div>
          </div>
          　
          <h2 className="text-black dark:text-white text-2xl mb-5">
            第四章　會議
          </h2>
          <div className="text-md pl-10 -indent-10 md:pl-24 md:-indent-24 whitespace-pre-line">
            <div>
              第二十八條　會員大會分定期會議與臨時會議2種，由理事長召集之，召集時除緊急事故之臨時會議外，應於15日前通知全體應出席人員。
              定期會議每年召開1次，臨時會議於理事會認為必要，或經會員五分之一以上之請求，或監事會函請召集時召開之。
              本會辦理法人登記後，臨時會議經會員十分之一以上之請求召開之。
            </div>
            <div>
              第二十九條　會員不能親自出席會員大會時，得以書面委託其他會員代理，每1會員以代理1人為限。
            </div>
            <div>
              第 三十
              條　會員大會之決議，以會員過半數之出席，出席人數過半數或較多數之同意行之。但下列事項之決議以出席人數三分之二以上同意行之。
              <ul className="ml-10 -indent-10">
              <li>　一、章程之訂定與變更。 </li>
              <li>　二、會員之除名。 </li>
              <li>　三、理事、監事之罷免。</li>
              <li>　四、財產之處分。 </li>
              <li>　五、本會之解散。</li>
              <li>　六、其他與會員權利義務有關之重大事項。</li></ul>
              本會辦理法人登記後，章程之變更以出席人數四分之三以上之同意或全體會員三分之二以上書面之同意行之；本會之解散，得隨時以全體會員三分之二以上之可決議解散之。
            </div>
            <div>
              第三十一條　理事會每6個月至少舉行會議1次，監事會每6個月至少舉行會議1次，必要時得召開聯席會議或臨時會議。
              前項會議召集時除臨時會議外，應於7日前通知全體應出席人員，會議之決議，各以理事、監事過半數之出席，出席人數較多數之同意行之。
            </div>
            <div>
              第三十二條　理事應出席理事會議，監事應出席監事會議，理事會、監事會不得委託出席。
              理事會議、監事會議及理監事聯席會議得以視訊會議召集之，理事、監事出席各視訊會議，視為親自出席，簽到及表決方式則配合視訊設備功能辦理。但涉及選舉、補選、罷免、訂定組織規定事項，不得採行視訊會議。
              理事、監事連續2次無故缺席理事會、監事會者，視同辭職。
            </div>
          </div>
          　{" "}
          <h2 className="text-black dark:text-white text-2xl mb-5">
            第五章　經費及會計{" "}
          </h2>
          <div className="text-md pl-10 -indent-10 md:pl-24 md:-indent-24 whitespace-pre-line">
          <div> 第三十三條　本會經費來源如下：</div>
          <ul className="ml-10 -indent-10">
          <li>
            一、入會費：個人會員入會費新臺幣 <b className="text-blue-400">2000</b> 元；相關會員入會費新臺幣 <b className="text-blue-400">1000</b> 元。
          </li>
          <li>
            二、常年會費：個人會員常年會費 <b className="text-blue-400">1000</b> 元；相關會員常年會費新臺幣 <b className="text-blue-400">500</b> 元。
          </li>
          <li>
            三、事業費。 
          </li>
          <li> 四、會員捐款。 </li>
          <li>五、委託收益。</li> 
          <li>六、基金及其孳息。</li>
          <li>七、其他收入。</li>
          <li>
            八、每年提撥該年度餘絀之10%，做為準備基金，基金及其孳息應專戶存儲，非經理事會通過，不得動支。提撥準備基金百分比，必要時經理監事會議做調整。
          </li></ul>
          <div>
            第三十四條　本會會計年度以曆年為準，自每年1月1日起至12月31日止。
            本會於會計年度開始前由理事會編造年度工作計畫及收支預算表，並於年度終了後3個月內由理事會編造上年度工作報告及會計報告，送監事會審核後造具審核意見書送還理事會，連同當年度工作計畫及收支預算表，提經會員大會通過後報主管機關備查。會員大會因故未能如期召開，可先經本會理事會及監事會或理監事聯席會議通過，事後提報大會追認後，再報請主管機關備查。
          </div>
          <div>
            第三十五條　本會於解散後，剩餘財產歸屬所在地之地方自治團體或主管機關指定之機關團體所有。
            本會解散之清算人選任及財產清算程序，如本會經法人登記，除法律另有規定外，依民法之規定辦理；如本會未經法人登記，應依會員大會決議辦理，會員大會無法決議時，由理事長擔任清算人，並準用民法清算之規定。
          </div>
          </div>
          　{" "}
          <h2 className="text-black dark:text-white text-2xl mb-5">
            第六章　附則
          </h2><div className="text-md pl-10 -indent-10 md:pl-24 md:-indent-24 whitespace-pre-line">
          <div> 第三十六條　本章程未規定事項，悉依有關法令規定辦理。</div>
          <div>
            第三十七條　本章程經會員（會員代表）大會通過後施行，並報主管機關核備，變更時亦同。
          </div>
          <div>
            第三十八條　本章程經本會111年9月24日第一屆第一次會員大會通過。
          </div> </div>
        </div>
      </SectionTitle>

      <Footer />
    </>
  );
}
