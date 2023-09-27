<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="Le hakama">
    <div><a href="http://fudoshinkan.over-blog.com/article-25903129.html">La signification des plis du hakama</a></div>

    <p>
      Le hakama comporte sept plis qui symbolisent les sert vertus du Budo. Le fait de porter le hakama montre que le pratiquant respecte ces vertus. Le
      <router-link to="/aikido/equipement/le-hakama/comment-plier-son-hakama">pliage du hakama</router-link> est donc très important.
    </p>
    <standard-content>
      <p>Les 5 plis à l'avant du hakama :</p>
      <v-list density="compact" class="bg-transparent">
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Jin </template>
          <template v-slot:subtitle> (djine) <span class="text-red font-weight-bold">仁</span> </template>
          <p>
            la bienveillance, la générosité : Cette vertu demande une attitude pleine d’attention pour autrui, sans considération d’origine, d’âge, de sexe, d’opinion ou de handicap. Il faut veiller à
            ne pas causer de trouble ou de peines inutiles pour soi et pour autrui.
          </p>
        </v-list-item>

        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Gi </template>
          <template v-slot:subtitle> (gui) <span class="text-red font-weight-bold">義</span> </template>
          <p>
            l’honneur, la justice : Le sens de l’honneur ne doit pas être mal placé et servir de prétexte à n’importe quelle action, notamment le duel. Il passe par le respect de soi et des autres. Il
            implique d’être fidèle à sa parole, à ses engagements et à son idéal. Le sens de gi c’est « avoir le sens du devoir, agir de manière juste ».
          </p>
        </v-list-item>

        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Rei </template>
          <template v-slot:subtitle> (lei) <span class="text-red font-weight-bold">礼</span> </template>
          <p>
            l’étiquette, la courtoisie : La politesse n’est que l’expression de l’intérêt sincère porté à autrui, quelle que soit sa position sociale, au travers des gestes et des d’attitudes pleines
            de respect. Le cérémonial et l’étiquette font partie de l’extériorisation de la politesse. Ils servent à offrir un cadre dans lequel le rapport aux autres, au dojo, à l’enseignant, est
            agréable et harmonieux.
          </p>
        </v-list-item>

        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Chi </template>
          <template v-slot:subtitle> (tchi) <span class="text-red font-weight-bold">智</span> </template>
          <p>
            la sagesse, l’intelligence au sens de discernement : La sagesse est l’aptitude à n’accorder aux choses et aux évènements que l’importance qu’ils ont réellement, sans passion qui trouble le
            jugement. La sérénité qui en résulte permet de distinguer le positif et le négatif de toutes choses ou évènements, ce qui est une forme d’intelligence.
          </p>
        </v-list-item>

        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Shin </template>
          <template v-slot:subtitle> (chine) <span class="text-red font-weight-bold">信</span> </template>
          <p>
            la confiance, la sincérité : Elle est fondamentale dans les arts martiaux. Sans elle la pratique n’est qu’une simulation, voire une gesticulation inutile. Si on n’est pas sincère dans son
            travail, son respect aux autres, ses attaques, on se ment et on ne permet pas aux autres de progresser. L’engagement doit être total, permanent, sans équivoque, car nous savons tous que
            l’illusion ne peut perdurer longtemps devant les exigences et le réalisme de la voie, et le regard des autres.
          </p>
        </v-list-item>
      </v-list>
    </standard-content>

    <standard-content>
      <p>Les 2 plis à l'arrière du hakama :</p>
      <v-list density="compact" class="bg-transparent">
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Jin </template>
          <template v-slot:subtitle> (djine) <span class="text-red font-weight-bold">仁</span> </template>
          <p>
            la bienveillance, la générosité : Cette vertu demande une attitude pleine d’attention pour autrui, sans considération d’origine, d’âge, de sexe, d’opinion ou de handicap. Il faut veiller à
            ne pas causer de trouble ou de peines inutiles pour soi et pour autrui.
          </p>
        </v-list-item>

        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Chu </template>
          <template v-slot:subtitle> (tchū) <span class="text-red font-weight-bold">忠</span> </template>
          <p>
            La loyauté, le respect : Voilà bien une valeur en voie de disparition dans notre société contemporaine, alors que l’argent ou les attraits du pouvoir permettent d’acheter les consciences
            et donc les loyautés. Cette valeur est pourtant la clé de voûte de nos arts martiaux : loyauté envers son professeur, envers les règles internes de son école, envers ses aînés, envers son
            dojo, envers ses armes et ses habits, envers le kamiza, et bien sûr envers le fondateur. C’est là le reflet de la rectitude du corps et de l’esprit du pratiquant.
          </p>
        </v-list-item>

        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Ko </template>
          <template v-slot:subtitle> (quo) <span class="text-red font-weight-bold">孝</span> </template>
          <p>
            La piété au sens filial (respect de la filiation, de l’héritage reçu): Il n’est pas question de religion ici, sinon nous serions dans les affres des luttes qui vont avec. Il faut
            comprendre piété dans le sens de respect profond et authentique des bases techniques, des codes, de son art martial, des aspects spirituel, historique et philosophique qui sous-tendent
            l’Aïkido.
          </p>
        </v-list-item>
      </v-list>
    </standard-content>
  </standard-page>
</template>
