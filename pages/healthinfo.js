import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";
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
  weight: "400",
});

const h1class = `${MingTi.className} text-left tracking-wide text-xl leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white text-xs sm:text-sm md:text-xl`;

export default function Home() {
  return (
    <>
      <Head>
        <title>台灣喉科醫學：衛教資訊</title>
        <meta name="description" content="TLA intro page" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <Navbar />

      <SectionTitle pretitle="Health Information" title="最新衛教訊息">
        <div className="m-10 font-bold text-slate-800">
          喉嚨卡卡、慢性咳嗽 藥物選擇建議參考美國指引治療咽喉逆流
        </div>

        <div className={h1class} >
          2023年1月台灣喉科醫學會舉行學術研討會，主要討論咽喉逆流治療現況，因在台灣每四人就有一人有胃酸逆流的問題，是現代人常見的疾病。當胃的內容物逆流至食道處，常見的典型症狀為心灼熱、酸逆流感，就是我們俗稱的胃食道逆流；而胃內容物若逆流至咽喉部，則可能出現<b className="underline">咳嗽、喉嚨卡卡、聲音沙啞</b>等非典型症狀，此稱為咽喉逆流，因此耳鼻喉科診間不乏因咽喉症狀前來求診的病患。然而大部分咽喉逆流患者的症狀與一般感冒、過敏症狀接近，因此容易缺乏警覺而延誤就醫時機。
          事實上，對咽喉部傷害較大的胃內容物主要是胃酸和胃蛋白酶；其他非酸性物質如膽鹽也會加劇喉部傷害，且咽喉黏膜較胃黏膜脆弱，因此對胃內容物的耐受度較差，一週只要有三次胃內容物逆流至咽喉即有咽喉逆流的症狀出現；而一般胃食道逆流則是一天要有五十次逆流至食道才會有相關症狀。咽喉逆流若不透過生活習慣或藥物治療改善，恐致聲帶慢性病變，造成不可逆的損傷。</div>
          <div className="m-10 font-bold text-slate-800">
            美國建議咽喉逆流先改善生活作息 藥物第一線為藻膠酸
          </div><div className={h1class} >
          喉科醫學會李宜潔醫師表示，根據2019年美國耳鼻喉頭頸外科醫學會對咽喉逆流的「臨床診斷及治療指引」，改善症狀建議先從調整生活作息開始，包括減少壓力、避免菸酒、減重且避免穿緊身衣物減少咽喉逆流的發生；而在藥物治療方面，美國耳鼻喉頭頸外科醫學會建議第一線治療用藥為藻膠酸(Alginate)，其不管對於酸性或非酸性胃內容物逆流皆能有效改善。根據近期的研究，單獨使用氫離子幫浦抑制劑(PPI)改善咽喉逆流幫助較小，因其對於非酸性或混合性逆流的效果較差，若同時使用藻膠酸(Alginate)及氫離子幫浦抑制劑(PPI)治療咽喉逆流可達到加乘效果。另外，治療時間上，由於咽喉黏膜恢復期較久，治療需要較有耐心，一般需要三至六個月的治療。</div>
          <div className="m-10 font-bold text-slate-800">
            天然藻膠酸不被人體吸收安全性高 口感滑順臨床接受度較高
          </div><div className={h1class} >
          李宜潔醫師還指出，根據研究，藻膠酸單次投予的劑量至少需要500毫克，以達到抗胃食道及咽喉逆流的目的。由天然褐藻（昆布）萃取的藻膠酸分為錠劑和水劑，水劑口感像奶昔，且因其不會被人體所吸收，所以安全性高，懷孕婦女、嬰兒也可使用。藻膠酸服用後可於五分鐘內在咽喉、食道上快速形成保護膜，緩解逆流物至咽喉的不適，且其與胃酸接觸後，會在胃液最上方形成泡沫曾阻隔胃內容物逆流，最後，藻膠酸還可中和過多的胃酸，藥效可維持4小時之久，臨床上民眾的接受度與用藥反應皆良好。</div>
          <div className="mt-5 mb-5 border-b-2 border-t-2 border-black bg-sky-100 p-1 w-22">病例分享</div>
          <div className={h1class}>
          一位44歲黃小姐，因為咽喉異物感、常需要清喉嚨伴隨聲音沙啞，擔心是否咽喉部長腫瘤就診，經檢查排除咽喉腫瘤，但可以看到黏膜及聲帶水腫，推測為咽喉逆流造成的慢性咽喉炎，給予藻膠酸(Alginate)及氫離子幫浦抑制劑(PPI)治療一個月，並衛教飲食習慣（睡前三小時不吃東西，少吃甜食、咖啡因等），症狀改善。咽喉逆流造成的慢性咽喉炎是一個惱人的慢性疾病也常造成心理上的困擾，除藥物上的使用，也需要生活習慣的改善。
        </div>
      </SectionTitle>

      <Footer />
    </>
  );
}
