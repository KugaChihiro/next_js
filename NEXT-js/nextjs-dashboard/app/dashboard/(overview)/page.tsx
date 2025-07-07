import { Card } from '@/app/ui/dashboard/cards';
import React, { Suspense } from 'react';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import RevenueChartsSkeleton from '@/app/ui/skeletons';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import LatestInvoicesSkeleton from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards'
import CardsSkeleton from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';


export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className = "flex gap-5 pt-10">
        <Suspense  fallback={<RevenueChartsSkeleton />}>
          <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices/>
        </Suspense>
      </div>
      <div className = "flex flex-col gap-5 pt-10">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </main>
  );
}
