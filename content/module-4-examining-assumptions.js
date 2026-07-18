/* ==========================================================
   Disability Awareness@Work — Module 4 content
   Part of the content/ folder. Loaded by index.html as a plain
   <script> tag (no build step, no fetch()) — safe to open the
   whole site locally or serve it from GitHub Pages.
   Edit this file to change THIS module only. Do not edit the
   module's position here — module order is set by the <script>
   tag order in index.html, not by anything in this file.
   ========================================================== */
window.DAW_CONTENT = window.DAW_CONTENT || [];
window.DAW_CONTENT.push(
{
  id:'examining-assumptions', time:'~20 min', title:'Examining assumptions',
  menuSub:'Why kind assumptions get in the way \u2014 and how to notice yours',
  lede:'The barriers that keep a colleague from being equally recognised are rarely ramps or software. More often the barrier is an assumption \u2014 usually a kind one, held by a decent person. This module puts the common ones on the table, so you can spot an assumption early, and without shame.',
  blocks:[
    {type:'callout', kind:'key', label:'Why this is the hardest module', html:'<p>Almost nobody at work intends to exclude anyone. Bias here rarely arrives as prejudice. It arrives as <strong>kindness</strong> (\u201cI didn\u2019t want to burden her\u201d), as <strong>pragmatism</strong> (\u201cwe just needed it done fast\u201d), and as <strong>protection</strong> (\u201cI was looking out for him\u201d).</p><p>That is exactly why it goes uncaught. Nobody thinks to question a good intention.</p><p>This module is not about finding fault \u2014 in yourself or anyone else. It is about seeing clearly.</p>'},

    {type:'h2', text:'Myth or fact? You decide'},
    {type:'text', html:'<p>Six statements you will genuinely hear in a Singapore workplace. Commit to an answer before reading the feedback \u2014 the guessing is where the learning happens.</p>'},
    {type:'sort', items:[
      {stmt:'Employees with disabilities are less productive.', truth:'myth', why:'It depends on fit and support \u2014 exactly as it does for everyone else. One Singapore employer who timed structured work found employees with intellectual disabilities were 30\u201340% more productive than the average worker in those roles. Match the person to the role, and the numbers take care of themselves.'},
      {stmt:'Working alongside a colleague with a disability tends to improve how a whole team communicates.', truth:'fact', why:'Employers report exactly this. Clearer instructions, clearer schedules, better-organised handovers \u2014 introduced to support one colleague, and quickly relied on by everyone. Access changes usually turn out to be improvements that were overdue anyway.'},
      {stmt:'It is safest never to mention the disability at all.', truth:'myth', why:'Pretending it does not exist creates awkwardness and blocks support. A respectful, private, work-focused question \u2014 \u201cwhat helps you do your best work?\u201d \u2014 is usually welcome. What is not welcome: public spotlighting, and medical curiosity dressed up as concern.'},
      {stmt:'Disability means inability.', truth:'myth', why:'A disability affects some tasks, in some ways, in some environments. Look at what the job actually requires, and at what the environment can change \u2014 not at a blanket verdict about a person. This is the single assumption that Focal Area 4 exists to dismantle.'},
      {stmt:'If something is wrong, a colleague with a disability will say so.', truth:'myth', why:'New joiners, junior staff, and anyone worried about being labelled difficult rarely speak up \u2014 and a colleague with a disability has often learned, painfully, what happens after speaking up. Noticing, and making it safe to ask, is everyone\u2019s job.'},
      {stmt:'Workplace adjustments are usually expensive.', truth:'myth', why:'Most cost nothing at all: a seating change, written instructions, one voice at a time, captions switched on, a shelf lowered. Where equipment or job redesign is genuinely needed, national funding exists \u2014 and HR is the route to it (Module 5).'}
    ]},
    {type:'callout', kind:'dyk', label:'Did you know?', html:'<p>One Singapore employer who measured structured work found employees with intellectual disabilities were <strong>30\u201340% more productive</strong> than the average worker in those roles. The right role, matched to the right person, is simply good business.</p>'},

    {type:'h2', text:'Four places assumptions do the damage'},
    {type:'text', html:'<p>A colleague can be employed, paid correctly and treated politely \u2014 and still never be recognised. It tends to happen in four places. None of the four feels like discrimination from the inside.</p>'},
    {type:'accordion', items:[
      {icon:'chat', bg:'#E8EFF9', fg:'#1A4F9C', title:'What we assume a person can handle', sub:'\u201cBetter not put her on the counter.\u201d',
       html:'<p>The most common and most invisible barrier: deciding what a colleague can cope with, without ever asking.</p><p>It shows up in who is put on the busy shift, who is trusted with the customer, who is asked to cover, who gets the interesting job and who gets the safe one. It shows up in who you choose to partner with, and who you never think to approach for help.</p><h5>The useful question</h5><p><em>Would this be offered to a colleague at the same level who does not have a disability?</em> If yes, offer it. Then let the answer be whatever it is.</p>'},
      {icon:'bulb', bg:'#EFF6DE', fg:'#4C6B1E', title:'What we assume a struggle means', sub:'\u201cIt must be the condition.\u201d',
       html:'<p>When a colleague with a disability finds something hard, the disability becomes the explanation. When anyone else finds the same thing hard, we look at the workload, the instructions, a change in the system, or a rough week at home.</p><h5>The useful question</h5><p><em>Would I reach for this explanation if the colleague had no disability?</em> Very often the real cause is something in the environment \u2014 an unclear instruction, an inaccessible tool, a briefing nobody could follow.</p>'},
      {icon:'star', bg:'#FBF0DC', fg:'#A66B12', title:'What we assume about growth', sub:'\u201cI left him out of the training \u2014 to protect him.\u201d',
       html:'<p>Training quietly not mentioned. A new machine someone else is shown first. A chance to act up, handed elsewhere. Each is defensible on its own; together, a career stops moving.</p><h5>The useful question</h5><p><em>Am I protecting a colleague, or deciding a colleague\u2019s future without asking?</em> If access is the genuine obstacle \u2014 a venue, a tool, a format \u2014 then fix the access. Do not withdraw the opportunity.</p>'},
      {icon:'people', bg:'#F9E9E4', fg:'#C4553B', title:'Who gets heard', sub:'Whose silence is misread.',
       html:'<p>Recognition is audible. Sit in one briefing and simply count: who is interrupted, who gets asked directly, whose good idea gets repeated a minute later by somebody else and credited to that somebody else.</p><h5>The useful move</h5><p>Say the name and give the credit, out loud, in the moment: <em>\u201cThat was Farhan\u2019s point \u2014 Farhan, say more?\u201d</em> Any colleague can do this. No authority required.</p>'}
    ]},

    {type:'h2', text:'The kindness traps'},
    {type:'text', html:'<p>Three habits that feel generous, and are not. All three are most common among people who are \u2014 correctly \u2014 considered supportive colleagues.</p>'},
    {type:'tiles', items:[
      {icon:'shield', bg:'#EDE9F7', fg:'#6B5CA5', h:'Over-helping', p:'Doing what a colleague can do perfectly well alone. Every time a task is taken over, the message received is: I did not think you could. Offer, wait, and let the answer be no.'},
      {icon:'star', bg:'#EDE9F7', fg:'#6B5CA5', h:'The inspiration trap', p:'\u201cSo inspiring, just for showing up!\u201d Treating ordinary competence as heroism marks a colleague as fundamentally different \u2014 and quietly lowers the bar being set.'},
      {icon:'chat', bg:'#EDE9F7', fg:'#6B5CA5', h:'The silent cover-up', p:'Quietly redoing a colleague\u2019s work, or never mentioning a mistake. It feels gentle. It communicates: I expect nothing of you, and I do not see you growing here.'}
    ]},

    {type:'h2', text:'The case: something has changed'},
    {type:'scenario',
      title:'Priya\u2019s difficult month',
      setting:'You work alongside Priya at a polyclinic, on the patient services counter. Priya has been a steady, capable colleague for two years \u2014 but this month she has been missing things at handover, has gone quiet in team huddles, and twice asked patients to repeat themselves several times. You have also noticed what might be a new hearing aid. You are her colleague, not her supervisor.',
      start:'p1',
      nodes:{
        p1:{text:['What do you do?'], choices:[
          {label:'Nothing \u2014 not your business, and the supervisor will notice eventually', to:'p1a'},
          {label:'Ask directly: \u201cIs that a hearing aid? Is that why you\u2019ve been missing things?\u201d', to:'p1b'},
          {label:'Mention it quietly to two other colleagues, so the team can watch out for her', to:'p1c'},
          {label:'Check in as a colleague: \u201cYou\u2019ve seemed a bit off this month \u2014 everything okay? Anything I can do?\u201d', to:'p1d'}
        ]},
        p1a:{tag:'poor', text:['Weeks pass. Priya keeps struggling, keeps saying nothing, and starts to look exhausted. She has begun to think the team has noticed and decided not to care.','Eventually someone raises it \u2014 as a performance problem.'], debrief:'Waiting for a colleague to ask for help assumes it feels safe to ask. Very often it does not. Noticing is not interfering; a colleague noticing early is frequently what prevents a small difficulty becoming a formal problem.', next:'p2'},
        p1b:{tag:'poor', text:['Priya stiffens. Whether or not it is a hearing aid is private medical information \u2014 and you have just tied a suspected condition to a judgement about her work, in one sentence.','She says \u201cI\u2019m fine\u201d, and tells you nothing for the rest of the year.'], debrief:'Never diagnose. Never make disclosure the price of support. Health information belongs to a person, and a person shares it only when it feels safe. Your legitimate ground is the work you can see \u2014 and how you might help.', next:'p2'},
        p1c:{tag:'poor', text:['By the end of the week, the version circulating in the pantry is that Priya is going deaf and cannot cope. Priya hears it from a colleague who assumed she already knew.','The concern was real. The effect was gossip.'], debrief:'Concern shared sideways is gossip, however kindly it starts. Speak to the person, not about the person \u2014 the same principle as the canteen table in Module 3, at higher stakes.', next:'p2'},
        p1d:{tag:'best', text:['Priya hesitates, then tells you she has sudden hearing loss in one ear. The noisy counter and the rapid handovers have become exhausting. She has told nobody, because she is afraid of being seen as unable to do the job.','\u201cPlease don\u2019t say anything,\u201d she adds.'], debrief:'You described what you noticed about the work, asked openly, and offered help \u2014 without diagnosing anything. That made it safe enough to speak. Notice her fear: being seen as unable. That fear is why colleagues stay silent while problems grow.', next:'p2'},
        p2:{text:['Priya has asked you to keep it to yourself. But you can see the handover process is the real pinch point. What now?'], choices:[
          {label:'Keep the secret and say nothing to anyone \u2014 a promise is a promise', to:'p2a'},
          {label:'Tell the supervisor about her hearing loss, so support can be arranged properly', to:'p2b'},
          {label:'Help where you can, and ask Priya how she would like the handover issue raised \u2014 and by whom', to:'p2c'}
        ]},
        p2a:{tag:'ok', text:['You start writing the handover notes down for Priya without being asked, which genuinely helps. But nothing else changes, the counter stays noisy, and Priya carries on alone \u2014 grateful, and still exhausted.'], debrief:'Loyalty is not the same as support. Keeping confidence is right; leaving a colleague with no path to formal help is not the whole job. The missing step is to ask Priya what she wants to happen next.', end:true},
        p2b:{tag:'poor', text:['Priya learns that her medical information reached the supervisor before she was ready. Whatever support follows, she now knows what happens when she confides in a colleague.','She will not make that mistake twice \u2014 with you, or with anyone.'], debrief:'Her information, her decision. Confidentiality is not merely courtesy; it is the foundation that makes it survivable for anyone on the team to speak up in future. Well-meant disclosure is still disclosure.', end:true},
        p2c:{tag:'best', text:['You suggest writing the handover on the board instead of calling it across a noisy counter \u2014 a change the whole team quietly appreciates.','Then you ask Priya: \u201cWould it help if this went to HR? I can come with you, or stay out of it \u2014 your call.\u201d She thinks about it, and a week later she goes.'], debrief:'Fix what is fixable, keep the confidence, and hand the decision back to the person it belongs to. You did not solve it alone \u2014 and you were never supposed to. Note that the fix improved the handover for everyone.', end:true}
      }
    },

    {type:'callout', kind:'key', label:'The rule of thumb that covers most of it', html:'<p>Talk about the <strong>work you can see</strong>, not the <strong>condition you suspect</strong>. Offer support first. And what a colleague tells you in confidence stays with you \u2014 the decision to share it is never yours.</p>'},

    {type:'mcq', q:'Mei uses a wheelchair and has never been asked to cover the service counter, although the counter is step-free and she is trained for it. Asked why, a colleague says: \u201cWe didn\u2019t want to burden her.\u201d What is happening?', options:['Reasonable protection of a colleague','A kind assumption that quietly removes an opportunity \u2014 without ever asking Mei','Normal practice, for safety reasons','Nothing much, as long as her pay is unaffected'], answer:1, why:'Kind intent, exclusionary effect. An opportunity was withdrawn on the basis of an assumption nobody tested \u2014 least of all with Mei. The inclusive move is to ask, and to let the answer be hers. Withheld chances are how a career quietly stops moving.'},
    {type:'mcq', q:'Farhan, who is blind, makes a strong point in a team huddle. A minute later another colleague repeats it and gets the credit. What is the most useful thing to do?', options:['Say nothing \u2014 raising it would embarrass everyone','Mention it to Farhan privately afterwards, so he feels supported','Say it in the room: \u201cThat was Farhan\u2019s point \u2014 Farhan, do you want to say more?\u201d','Report the colleague afterwards'], answer:2, why:'Recognition has to happen where the room can see it. A private word afterwards is sympathy; naming the contribution in the moment is recognition \u2014 and it takes no authority whatsoever. This is exactly the kind of moment no policy will ever reach.'},
    {type:'reflect', key:'r_m3', q:'Which idea in this module was most surprising, or sat least comfortably with you? There is no wrong answer \u2014 noticing the discomfort is the point.'}
  ]
}
);
