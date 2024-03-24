---
layout: page
title: Impressum
description: Offenlegung gemäß §5 Telemediengesetz
permalink: /impressum/
internal_id: legal
order: 99
---

### Verantwortliche für diese Website

**Annika Fischer**\\
Heilpraktikerin

*Postanschrift von Praxis {{ site.data.global.praxis_frankfurt_nordend_ost.name }}*:\\
{{ site.data.global.praxis_frankfurt_nordend_ost.line1 }}\\
{{ site.data.global.praxis_frankfurt_nordend_ost.line2 }}\\
{{ site.data.global.praxis_frankfurt_nordend_ost.line3 }}

*Kontakt*:\\
Tel {{ site.data.global.contact.tel | tel_link }}\\
E-Mail <a href="mailto:{{ site.data.global.contact.email }}">{{ site.data.global.contact.email }}</a>\\
Website: <a href="{{ site.url }}">{{ site.url }}</a>

*Berufshaftpflichtversicherung*:\\
Continentale Sachversicherung AG\\
Ruhrallee 92\\
44139 Dortmund

*Aufsichtsbehörde*:\\
<a href="https://frankfurt.de/service-und-rathaus/verwaltung/aemter-und-institutionen/gesundheitsamt" rel="noopener" target="_blank">Gesundheitsamt Frankfurt am Main</a>\\
Breite Gasse 28\\
60313 Frankfurt am Main


### Hinweise zur Website

#### Information gemäß § 36 VSBG

Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website: Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

#### Haftung für Links
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
 
#### Urheberrecht
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

-----------

{% capture date %}
{%- assign m = site.time | date: "%-m" | minus: 1 -%}
{{ site.time | date: "%-d" }}. {{ site.data.ui.de.months[m] }} {{ site.time | date: "%Y" }}
{% endcapture %}

<small>
    Diese Website mit Version {% project_version %} wurde zuletzt am {{ date }} mit <a href="https://jekyllrb.com" rel="noopener" class="external">Jekyll</a> kompiliert.
    Das Layout basiert auf der Vorlage <em>Spectral</em> von <a href="https://html5up.net" rel="noopener" class="external">HTML5 UP</a>.
    Das Favoriten-Symbol wurde erstellt von <a href="https://icons8.com/" rel="noopener" class="external">Icons8</a>.
    Das Impressum wurde zuletzt geändert am {{ site.last_change.legal }}.
</small>